import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rfwfdjdnbkrdtamuagok.supabase.co';
const supabase = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_AUTH);
export default supabase;
