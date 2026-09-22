const SUPABASE_URL = "https://xpqolqhegicvuqbtuyia.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_29by9bPe7K78iyNdQdweOA_SBvLPuUG";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);