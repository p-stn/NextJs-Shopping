"use client"
import { useContext, createContext, useState } from "react";


const GlobalContextShowProduct = createContext({ products: [], ShowProduct: (id) => { } })

export const ShowProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    // const ShowProduct = async (id) => {
        async function ShowProduct(id){
            
        try {
            const response = await fetch(`https://one-api.ir/digikala/?token=722106:6552525d25f10&action=category&id=${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const getD = await response.json()
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
        <GlobalContextShowProduct.Provider value={{ products, ShowProduct }}>
            {children}
        </GlobalContextShowProduct.Provider>
    );
};

export const useGlobalContextShowProduct = () => useContext(GlobalContextShowProduct);

