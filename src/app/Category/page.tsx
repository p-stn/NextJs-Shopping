"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContextCategory } from '@/Context/categoryContext'



interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
}



export default function Page({ test }: any) {
  // const MyCetApi = JSON.parse(localStorage.getItem('selectedCategory'))
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { category, CategoryProduct } = useGlobalContextCategory()
  const router = useRouter();

  function showCat(e: any) {
    const categoryId = e.target.getAttribute("data-categoryId");

    localStorage.setItem("selectedCategory", JSON.stringify(categoryId));

    // setT(e.target.getAttribute("dataCategoryId"));
    test.current.style.display = 'none';
  }

  useEffect(() => {
    const existingValue = localStorage.getItem('selectedCategory');
    const initialValue = existingValue ? JSON.parse(existingValue) : 11;
    localStorage.setItem('selectedCategory', JSON.stringify(initialValue));

    // router.push(`/Category/${MyCetApi}`);

    CategoryProduct()
  }, []);

  return (
    <>
      <ul className="w-full flex flex-col">
        {category.map((e: any, i: any) => {
          let srcHead = `../Category/${e.id}`;
          return (
            <li key={i} className="text-[11px] w-full p-[10px] hover:text-[#dc2626] hover:bg-[#fff]">
              <Link
                key={i}
                className="w-full h-full mr-[5px] flex items-center"
                onClick={showCat}
                as={srcHead}
                data-categoryId={e.id}
                href={srcHead}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}

              >
                <e.icon fill={hoveredIndex === i ? '#dc2626' : '#000'} />
                {e.name}
              </Link>

            </li>)

        })}
      </ul>
    </>
  );
}
