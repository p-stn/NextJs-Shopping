import { createClient } from "@/utils/supabase/client";

async function deleteFromCart(cartId:any) {
    const supabase = createClient()
    const user = await supabase.auth.getUser();
    const us = user.data.user?.id;
  
    if (!user) {
      console.error('User not logged in');
      return;
    }
  
    const { data, error } = await supabase
      .from('carts')
      .delete()
      .eq('product_id', cartId)
      .eq('user_id', us);  // Ensuring that the user can only delete their own items
  
    if (error) {
      console.error('Error deleting item from cart:', error);
    } else {
      console.log('Item deleted from cart:', data);
    }
  }

export default deleteFromCart