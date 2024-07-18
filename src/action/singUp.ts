"use server"
import { createClient } from "@/utils/supabase/server";

export async function signup(email: string, password: string,fullName:string) {
    const supabase = createClient();
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: email,
      password: password,
      full_name:fullName

      // email: formData.get('email') as string,
      // password: formData.get('password') as string,
    };
    const val = await (await supabase).auth.signUp(data);
    // console.log(val);
    return val
    // redirect('/')
    // if (error) {
    //   // redirect('/error')
    //   console.log(error);
    // }
  
    // console.log(data);
    // revalidatePath('/', 'layout')
  }