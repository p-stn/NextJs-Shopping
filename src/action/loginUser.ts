'use server'

import { createClient } from "@/utils/supabase/server";
export async function loginUser(email: string, password: string) {
    const supabase = createClient();  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const Userdata = {
      email: email,
      password: password,
      // email: formData.get('email') as string,
      // password: formData.get('password') as string,
    };
    const data = await (await supabase).auth.signInWithPassword(Userdata);  
    return data
  }