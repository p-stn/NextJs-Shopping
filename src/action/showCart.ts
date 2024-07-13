// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";

export const showTocarts = async () => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const us = user.data.user?.id;
  if (!user) {
    console.error("User not logged in");
    return;
  }
  // console.log(ProName,ProId,ProImg,Pro_Price);

  let { data: carts, error } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", us);

  // ,product_id,product_img,product_price
  if (!carts) return [];
  return carts;
};

// const { data, error } = await supabase
//     .from("carts")
//     .insert([{ user_id: us, product_name: ProName, product_id: ProId, product_img: ProImg,product_price:Pro_Price}]);
