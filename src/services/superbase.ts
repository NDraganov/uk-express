import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pchcyshonzekhpqaahbf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjaGN5c2hvbnpla2hwcWFhaGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5NDUwNDYsImV4cCI6MjAxNjUyMTA0Nn0.ks4U_mkPZ07tO-7OzST41AfXrbp3msvgPJITRc8lcWA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
