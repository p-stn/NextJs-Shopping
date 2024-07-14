"use server"
import { getUser } from "@/action/getUser";
// import useStoreGetuser from "@/store/getUser";

export default async function getUserInfo() {  
  const user = await getUser();
  if (!user) {
    // emty arry
    return {status:false,user:[]}
  }
  
  // getuser("log",user)
  return {status:true,user : user}

}


