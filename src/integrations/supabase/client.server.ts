import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client using publishable (anon) key.
// Reads from PUBLIC_SUPABASE_* secrets (VITE_/SUPABASE_ prefixes are reserved).
const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL!;
const SUPABASE_PUBLISHABLE_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseServer = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
