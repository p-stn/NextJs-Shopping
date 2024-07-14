// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";

export const addToCart = async (ProName:any,ProId:any,ProImg:any,Pro_Price:any) => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const us = user.data.user?.id;
  if (!user) {
    console.error("User not logged in");
    return;
  }
  // console.log(ProName,ProId,ProImg,Pro_Price);
  console.log(us);
  const { data, error } = await supabase
    .from("carts")
    .insert([{ user_id: us, product_name: ProName, product_id: ProId, product_img: ProImg,product_price:Pro_Price}]);
    
    // ,product_id,product_img,product_price
  console.log(data);
  console.log(error);
};


// if (error) {
//   console.error('Error adding item to cart:', error);
// } else {
//   console.log('Item added to cart:', data);
// }
// let val = await supabase.from("carts").select("*");
// return val
// const { data, error } = await supabase.from('carts').insert([{ item_name: 'someValue', quantity: 88 }]).select()

// const { data, error } = await supabase.from('carts').insert([{ item_name: 'someValue', quantity: 'otherValue' },]).select()

// console.log(data);
// const data = await supabase.from('carts')
// .insert([{ some_column: 'someValue', other_column: 'otherValue' },]).select()
// return data
// };
// <h5 class="text-foreground pr-5 text-sm">Enable insert for authenticated users only</h5>
// <p>This policy gives insert access to your table for all authenticated users only.</p>

// <h5 class="text-foreground pr-5 text-sm">Enable insert for users based on user_id</h5>
// <p>This policy assumes that your table has a column "user_id", and allows users to insert rows which the "user_id" column matches their ID</p>
