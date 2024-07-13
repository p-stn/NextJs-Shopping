"use server"
import { loginUser } from "@/action/loginUser";
// import useStoreGetuser from "@/store/getUser";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function loginUserClient(user,pass) {  
  const{data, error} =  await loginUser(user,pass);
  console.log(data);
  console.log(error);
  if(error){
    revalidatePath('ُ/Signup', 'layout')
    redirect('/Signup')
  }
  revalidatePath('/', 'layout')
  redirect('/')

}

// revalidatePath('/', 'layout')
// redirect('/')

// login null