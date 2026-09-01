import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkcfjkkyeitnjsljhnzc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2Zqa2t5ZWl0bmpzbGpobnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTA0OTIsImV4cCI6MjEwMjc2NjQ5Mn0.bqgUwvqdhF4_V5b36Ix4FlH0rQ1aqT1Y_OHkuo3kJb4';

const supabase = createClient(supabaseUrl, supabaseKey);

const decisionLogs = [
  {
    slug: "pricing",
    category: "DECISION LOG",
    tags: ["STRATEGY", "PRICING"],
    title: "WHY WE MOVED FROM\nT&M TO OUTCOME-BASED PRICING",
    excerpt: "Clients wanted certainty. We wanted alignment.",
    author: "SARAH CHEN",
    authorFull: "Sarah Chen",
    role: "Chief Executive Officer",
    date: "15 MAR 2026",
    readTime: "8 MIN READ",
    context: [
      "We had spent three years selling our work through time-and-materials contracts.",
      "The model worked financially.",
      "But it created the wrong incentives.",
      "Clients wanted predictable outcomes. Our teams were rewarded for utilization. Those two things were increasingly in conflict."
    ],
    decision: {
      main: "We stopped selling hours.",
      supporting: "We moved to outcome-based pricing for engagements where the result could be clearly defined."
    },
    alternativesRejected: [
      {
        number: "01",
        title: "KEEP T&M",
        reason: "Rejected because it preserved the utilization incentive."
      },
      {
        number: "02",
        title: "MOVE EVERYTHING TO FIXED PRICE",
        reason: "Rejected because not every engagement has a measurable outcome."
      },
      {
        number: "03",
        title: "WAIT FOR MARKET PRESSURE",
        reason: "Rejected because waiting would mean letting the old incentives compound."
      }
    ],
    outcome: {
      timeframe: "Six months later:",
      metrics: [
        { value: "32%", label: "reduction in scope disputes" },
        { value: "18%", label: "increase in client retention" }
      ],
      caveats: [
        "The change did not work universally.",
        "Three clients rejected the model.",
        "Those clients were not a failure of the decision. They revealed where the decision did not apply."
      ]
    },
    principle: {
      statement: "PRICE FOR THE\nOUTCOME, NOT\nTHE HOUR.",
      category: "Strategy"
    },
    authorNote: "“This decision looked obvious in hindsight. It wasn’t obvious when we made it.”",
    relatedDecisions: [
      {
        title: "NETSUITE CRISIS",
        tags: "TECH · CRISIS",
        href: "/judgment/netsuite"
      },
      {
        title: "FIRING OUR LARGEST CLIENT",
        tags: "CULTURE · STRATEGY",
        href: "/judgment/firing-largest-client"
      }
    ],
    previousDecision: {
      title: "FIRING OUR LARGEST CLIENT",
      href: "/judgment/firing-largest-client"
    },
    nextDecision: {
      title: "NETSUITE CRISIS",
      href: "/judgment/netsuite"
    }
  },
  {
    slug: "netsuite",
    category: "DECISION LOG",
    tags: ["TECH", "CRISIS"],
    title: "THE NETSUITE 2024.2 API CRISIS",
    excerpt: "47 clients. Six weeks. One platform change that couldn’t wait.",
    author: "ALEX PETROV",
    authorFull: "Alex Petrov",
    role: "Chief Technology Officer",
    date: "03 FEB 2026",
    readTime: "6 MIN READ",
    context: [
      "NetSuite released their 2024.2 update with breaking API changes across 14 endpoint families.",
      "We had 47 active client integrations depending on those endpoints.",
      "The migration window was six weeks before the old endpoints would be deprecated."
    ],
    decision: {
      main: "We absorbed the entire migration cost.",
      supporting: "Every client integration was migrated on our time, at our expense, with zero client downtime."
    },
    alternativesRejected: [
      {
        number: "01",
        title: "BILL CLIENTS FOR MIGRATION",
        reason: "Rejected because the platform change was not their fault."
      },
      {
        number: "02",
        title: "WAIT FOR NETSUITE TO EXTEND THE DEADLINE",
        reason: "Rejected because hoping for deadline extensions is not a strategy."
      },
      {
        number: "03",
        title: "MIGRATE ONLY CRITICAL INTEGRATIONS FIRST",
        reason: "Rejected because every client’s integration is critical to them."
      }
    ],
    outcome: {
      timeframe: "After the migration:",
      metrics: [
        { value: "47", label: "client integrations migrated" },
        { value: "0", label: "hours of client downtime" }
      ],
      caveats: [
        "The cost was significant.",
        "But the trust earned was worth more than the margin lost."
      ]
    },
    principle: {
      statement: "PLATFORM RISK\nIS OUR RISK.\nWE ABSORB IT.",
      category: "Tech"
    },
    authorNote: "“When a platform breaks, the client doesn’t care whose fault it is. They care who fixes it.”",
    relatedDecisions: [
      {
        title: "OUTCOME-BASED PRICING",
        tags: "STRATEGY · PRICING",
        href: "/judgment/pricing"
      },
      {
        title: "FIRING OUR LARGEST CLIENT",
        tags: "CULTURE · STRATEGY",
        href: "/judgment/firing-largest-client"
      }
    ],
    previousDecision: {
      title: "OUTCOME-BASED PRICING",
      href: "/judgment/pricing"
    },
    nextDecision: {
      title: "HIRING A PRINCIPAL",
      href: "/judgment/hiring"
    }
  },
  {
    slug: "hiring",
    category: "DECISION LOG",
    tags: ["HIRING", "CULTURE"],
    title: "WHY WE HIRED A PRINCIPAL\nBEFORE WE NEEDED ONE",
    excerpt: "Capacity planning isn’t about today’s utilization. It’s about tomorrow’s risk.",
    author: "MARIA SANTOS",
    authorFull: "Maria Santos",
    role: "Chief Operating Officer",
    date: "10 JAN 2026",
    readTime: "7 MIN READ",
    context: [
      "Our utilization rate was at 78%. By most standards, we had room.",
      "But we were winning larger engagements. The pipeline was shifting toward complexity.",
      "If we waited until utilization hit 95% to hire, the new person would arrive into a crisis."
    ],
    decision: {
      main: "We hired a Principal Engineer six months early.",
      supporting: "We accepted lower short-term utilization to build capacity before we needed it."
    },
    alternativesRejected: [
      {
        number: "01",
        title: "HIRE WHEN UTILIZATION HITS 90%",
        reason: "Rejected because onboarding takes months and the gap would already exist."
      },
      {
        number: "02",
        title: "USE CONTRACTORS TO FILL THE GAP",
        reason: "Rejected because principal-level judgment cannot be contracted."
      },
      {
        number: "03",
        title: "REDISTRIBUTE WORK ACROSS EXISTING TEAM",
        reason: "Rejected because redistribution at scale degrades quality."
      }
    ],
    outcome: {
      timeframe: "Four months later:",
      metrics: [
        { value: "3", label: "complex engagements staffed without scrambling" },
        { value: "0", label: "quality incidents during ramp-up" }
      ],
      caveats: [
        "The hire looked expensive at the time.",
        "It looked inevitable three months later."
      ]
    },
    principle: {
      statement: "HIRE FOR THE\nCRISIS, NOT\nTHE COMFORT.",
      category: "Culture"
    },
    authorNote: "“The best time to hire is when you can still afford to onboard someone properly.”",
    relatedDecisions: [
      {
        title: "OUTCOME-BASED PRICING",
        tags: "STRATEGY · PRICING",
        href: "/judgment/pricing"
      },
      {
        title: "NETSUITE CRISIS",
        tags: "TECH · CRISIS",
        href: "/judgment/netsuite"
      }
    ],
    previousDecision: {
      title: "NETSUITE CRISIS",
      href: "/judgment/netsuite"
    },
    nextDecision: null
  }
];

async function seed() {
  for (const log of decisionLogs) {
    const { data, error } = await supabase
      .from('page_content')
      .upsert({ id: `judgment_slug_${log.slug}`, content: log });

    if (error) {
      console.error(`Error inserting ${log.slug}:`, error);
    } else {
      console.log(`Successfully inserted judgment slug: ${log.slug}`);
    }
  }
}

seed();
