import { loginUser } from "@/action/loginUser";
import { addToCart } from "@/action/addTocart";
// import useStoreGetuser from "@/store/getUser";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function addToCartClient(ProName,ProId,ProImg,Pro_Price) {  
  const val =  await addToCart(ProName,ProId,ProImg,Pro_Price);
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