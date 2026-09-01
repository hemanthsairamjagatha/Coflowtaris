import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkcfjkkyeitnjsljhnzc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2Zqa2t5ZWl0bmpzbGpobnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTA0OTIsImV4cCI6MjEwMjc2NjQ5Mn0.bqgUwvqdhF4_V5b36Ix4FlH0rQ1aqT1Y_OHkuo3kJb4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data: d2, error: e2 } = await supabase.from('decision_logs').select('*').limit(1);
  console.log('decision_logs:', !!d2, e2?.message || 'no error');
}

check();
