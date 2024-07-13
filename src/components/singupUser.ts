"use server"
import { signup } from '@/action/singUp';
// import useStoreGetuser from "@/store/getUser";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function singUserClient(user,pass) {  
    console.log(user); 
    console.log(pass); 
  const{data, error} =  await signup(user,pass);
  console.log(data);
  console.log(error);
  if(error){
    // revalidatePath('ُ/Signup', 'layout')
    // redirect('/Signup')
    console.log("OPS");
  }
//   revalidatePath('/', 'layout')
//   redirect('/')
console.log("singup");

}

// revalidatePath('/', 'layout')
// redirect('/')

// login null