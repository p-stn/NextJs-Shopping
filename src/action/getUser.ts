'use server'
import { createClient } from "@/utils/supabase/server";

export async function getUser() {
    const supabase = createClient();
    const { data: { user },} = await(await supabase).auth.getUser();
       
      return user

}