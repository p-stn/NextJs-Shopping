"use client"
import { useContext, createContext, useState } from "react";


const GlobalContextShowProduct = createContext({ loading:false,products: [], ShowProduct: (id) => { } })

export const ShowProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false)
    
    // const ShowProduct = async (id) => {
        async function ShowProduct(id){
            
        try {
            const response = await fetch(`https://one-api.ir/digikala/?token=${process.env.NEXT_PUBLIC_API_KEY}&action=category&id=${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const getD = await response.json()
            setLoading(true)
            const newProducts = [];
            getD.result.map((e) => {
                if (e.type === "horizontal_products") {
                    e.data.products.map((s) => {
                        newProducts.push(s)
                    });
                }
            });
            setProducts(newProducts);



        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <GlobalContextShowProduct.Provider value={{ loading,products, ShowProduct }}>
            {children}
        </GlobalContextShowProduct.Provider>
    );
};

export const useGlobalContextShowProduct = () => useContext(GlobalContextShowProduct);

