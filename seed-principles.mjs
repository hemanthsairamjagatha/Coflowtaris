import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkcfjkkyeitnjsljhnzc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2Zqa2t5ZWl0bmpzbGpobnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTA0OTIsImV4cCI6MjEwMjc2NjQ5Mn0.bqgUwvqdhF4_V5b36Ix4FlH0rQ1aqT1Y_OHkuo3kJb4';

const supabase = createClient(supabaseUrl, supabaseKey);

const newLogs = [
  {
    slug: "sap-only",
    title: "Why We Said No to SAP-Only",
    date: "15 JAN 2019",
    category: "DECISION LOG",
    tags: ["STRATEGY"],
    principle: {
      statement: "Specialization compounds. Generalization dilutes.",
      category: "Strategy"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "partner-celigo",
    title: "Why We Partner with Celigo/Make/Workato",
    date: "10 FEB 2020",
    category: "DECISION LOG",
    tags: ["STRATEGY"],
    principle: {
      statement: "Build vs. Buy: Partner with the best, don't build the rest.",
      category: "Strategy"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "tech-debt",
    title: "Technical Debt Bankruptcy",
    date: "05 MAR 2024",
    category: "DECISION LOG",
    tags: ["TECH"],
    principle: {
      statement: "Technical debt is a business decision. Make it visible.",
      category: "Tech"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "ai-thesis",
    title: "AI Thesis: Custom LLMs vs. Wrapping OpenAI",
    date: "20 AUG 2024",
    category: "DECISION LOG",
    tags: ["TECH"],
    principle: {
      statement: "Automation must be explainable. Black boxes fail audits.",
      category: "Tech"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "firing-largest-client",
    title: "Why We Fired Our Largest Client",
    date: "10 MAR 2023",
    category: "DECISION LOG",
    tags: ["CRISIS"],
    principle: {
      statement: "Revenue that costs your culture is expensive revenue.",
      category: "Crisis"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "key-person",
    title: "Key Person Succession",
    date: "15 MAY 2024",
    category: "DECISION LOG",
    tags: ["CRISIS"],
    principle: {
      statement: "Key person risk is a governance failure. Plan for it.",
      category: "Crisis"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "advisory-board",
    title: "Structuring the Advisory Board",
    date: "01 JUN 2023",
    category: "DECISION LOG",
    tags: ["CULTURE"],
    principle: {
      statement: "Decision logs > meetings. Write it down or it didn't happen.",
      category: "Culture"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  },
  {
    slug: "pe-term-sheet",
    title: "Walking Away from a PE Term Sheet",
    date: "15 NOV 2022",
    category: "DECISION LOG",
    tags: ["CULTURE"],
    principle: {
      statement: "Transparency compounds. Secrecy rots.",
      category: "Culture"
    },
    outcome: { metrics: [], timeframe: "Outcome realized" }
  }
];

async function seed() {
  const { data: currentData } = await supabase
    .from('page_content')
    .select('content')
    .eq('id', 'judgment')
    .single();

  let existingLogs = currentData?.content?.logs || [];
  
  // filter out the ones we're adding just in case to avoid duplicates
  const newSlugs = newLogs.map(l => l.slug);
  existingLogs = existingLogs.filter(l => !newSlugs.includes(l.slug));

  const updatedLogs = [...existingLogs, ...newLogs];

  const content = {
    ...currentData?.content,
    logs: updatedLogs
  };

  const { error } = await supabase
    .from('page_content')
    .upsert({ id: 'judgment', content: content });

  if (error) {
    console.error(`Error updating judgment logs:`, error);
  } else {
    console.log(`Successfully added principles via judgment logs! Total logs: ${updatedLogs.length}`);
  }
}

seed();
