import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl =   "https://ejfjcbjlcizcuoewsrzb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZmpjYmpsY2l6Y3VvZXdzcnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzMzQ4MjQsImV4cCI6MTk5MDkxMDgyNH0.TqToVpJM84EWFtMLtEeYEsn76akz87Jbm4oeoX79aao"

export default createClient(supabaseUrl, supabaseAnonKey);


