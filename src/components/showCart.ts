import { loginUser } from "@/action/loginUser";
import { addToCart } from "@/action/addTocart";
// import useStoreGetuser from "@/store/getUser";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { showTocarts } from "@/action/showCart";
export default async function showToCartClient() {  
  const val =  await showTocarts()
  return val

}
