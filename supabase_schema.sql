-- 1. Create a table for Page Content
CREATE TABLE IF NOT EXISTS public.page_content (
  id TEXT PRIMARY KEY,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Create a table for PDF Documents
CREATE TABLE IF NOT EXISTS public.pdf_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Set up Row Level Security (RLS) policies (Optional depending on your setup)
-- For simplicity, these allow public read access. You might want to restrict write access.
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdf_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-only access to page_content" 
ON public.page_content FOR SELECT USING (true);

CREATE POLICY "Allow public read-only access to pdf_documents" 
ON public.pdf_documents FOR SELECT USING (true);

-- To allow updates from your app, you should create a more secure policy, but for local dev you can allow all:
CREATE POLICY "Allow all actions for authenticated users" 
ON public.page_content FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all actions for authenticated users on pdfs" 
ON public.pdf_documents FOR ALL USING (true) WITH CHECK (true);
