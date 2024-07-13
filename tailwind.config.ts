import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme:{
        extend:{
          
        }
      },
      content:{
       'gift' : 'url("/icon/hader-icon/gift-cart.svg")' ,
       'ham' : 'url("/icon/hader-icon/ham.svg")' ,
       'loc' : 'url("/icon/hader-icon/loc.svg")' ,
       'market' : 'url("/icon/hader-icon/market.svg")' ,
       'price' : 'url("/icon/hader-icon/price.svg")' ,
       'wow' : 'url("/icon/hader-icon/wow.svg")' ,
        'medal' : 'url("/icon/hader-icon/medal.svg")' ,
      //  'gift' : 'url("/icon/hader-icon/gift-cart.svg")' ,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;