import { loginUser } from "@/action/loginUser";
import { addToCart } from "@/action/addTocart";
// import useStoreGetuser from "@/store/getUser";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import deleteFromCart from "@/action/removeTocart"

export default async function removeToCartsClient(id) {  
  const val =  await deleteFromCart(id)
  console.log(val);
//   if(error){
//     revalidatePath('ُ/Signup', 'layout')
//     redirect('/Signup')
//   }
//   revalidatePath('/', 'layout')
//   redirect('/')

}

// revalidatePath('/', 'layout')
// redirect('/')


// login null