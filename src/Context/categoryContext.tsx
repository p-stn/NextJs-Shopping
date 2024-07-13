"use client"
import React, { createContext, useContext, useState } from "react";
import locdata from '@/data/local-data'

const GlobalContextCategory = createContext({ category: [], CategoryProduct: () => { } });

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState([]);

    // const CategoryProduct = async () => {
    async function CategoryProduct() {
        try {
            const response = await fetch("https://one-api.ir/digikala/?token=722106:6552525d25f10&action=categories");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const getD = await response.json()
            const categori:any= [];
            getD.result.widgets.map((e:any, i:any) => {
                if (e.type === 'category_child_view') { 
                    categori.push({ name: e.data.title, id: e.data.child[0].id, icon: locdata[i].name })
                    // setCategory((prevCategory) => [...prevCategory, ]); 
                }
            })
            setCategory(categori)

            // setCategory(newCategories);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <GlobalContextCategory.Provider value={{ category, CategoryProduct }}>
            {children}
        </GlobalContextCategory.Provider>
    );
};

export const useGlobalContextCategory = () => useContext(GlobalContextCategory);