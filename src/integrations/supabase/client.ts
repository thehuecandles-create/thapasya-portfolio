import { createClient } from "@supabase/supabase-js";

// Publishable (anon) key — safe to expose in browser code.
const SUPABASE_URL = "https://rwknlleecsparayybuek.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_nNA1I0hGfAjjskf-ftk9qA_PNt3vAf7";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
