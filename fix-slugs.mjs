import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkcfjkkyeitnjsljhnzc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2Zqa2t5ZWl0bmpzbGpobnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTA0OTIsImV4cCI6MjEwMjc2NjQ5Mn0.bqgUwvqdhF4_V5b36Ix4FlH0rQ1aqT1Y_OHkuo3kJb4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fix() {
  const { data: currentData } = await supabase
    .from('page_content')
    .select('content')
    .eq('id', 'judgment')
    .single();

  if (!currentData?.content?.logs) return;

  const logs = currentData.content.logs;
  
  // 1. Fix logs array (add id, href)
  const updatedLogs = logs.map(log => {
    const slug = log.slug || (log.href ? log.href.split('/').pop() : log.id);
    return {
      ...log,
      id: log.id || slug,
      slug: slug,
      href: `/judgment/${slug}`
    };
  });

  await supabase
    .from('page_content')
    .update({ content: { ...currentData.content, logs: updatedLogs } })
    .eq('id', 'judgment');
    
  console.log("Updated judgment array.");

  // 2. Insert missing slug records
  for (const log of updatedLogs) {
    const slugId = `judgment_slug_${log.slug}`;
    const { data: existing } = await supabase
      .from('page_content')
      .select('id')
      .eq('id', slugId)
      .single();
      
    if (!existing) {
      console.log(`Creating missing slug record: ${slugId}`);
      
      const newContent = {
        category: "DECISION LOG",
        tags: log.tags || ["STRATEGY"],
        title: log.title || "Missing Title",
        excerpt: "This decision log was added directly from the Principles list.",
        author: log.author || "AUTHOR",
        authorFull: "Flowtaris Leadership",
        role: "Leadership",
        date: log.date || "2024",
        readTime: "3 MIN READ",
        context: [
          "This principle emerged from a specific scenario we encountered.",
          "We are documenting this to ensure we stick to the pattern moving forward."
        ],
        decision: {
          main: "We decided to operate differently.",
          supporting: "This decision wasn't easy, but it was necessary for our long-term alignment."
        },
        alternativesRejected: [
          { number: "01", title: "Status Quo", reason: "Failing to act would result in compounding issues." }
        ],
        outcome: {
          metrics: log.outcome?.metrics || [{ value: "100%", label: "Alignment achieved" }],
          timeframe: log.outcome?.timeframe || "Within 30 days"
        },
        principle: log.principle?.statement || "No principle specified."
      };

      await supabase
        .from('page_content')
        .insert({ id: slugId, content: newContent });
    }
  }

  console.log("Fixed missing slugs!");
}

fix();
