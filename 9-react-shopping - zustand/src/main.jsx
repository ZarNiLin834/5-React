import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";


// const Categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing"
// ];

// console.log(Categories.map((category) => createElement("button",null,"category")));

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router}/>);

// view - react node
// const app = createElement( 
//   "div",
//   {id : "category-section",className : "p-5"},
//   createElement("p",{className : "text-2xl text-gray-500"},"Product Categories"),
//   createElement(
//     "div",
//     null,
//     Categories.map((category) => createElement("button",{className : "border mt-5 border-black me-4 px-4 py-1"},category))
//   )
// );

// render

// const title = document.createElement("p");
// title.innerText = "Product Category";
// title.classList.add("text-2xl","text-gray-500","p-10");

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("btn") ;
//     btn.innerText = categoryName;
// btn.classList.add = ("border","border-black","px-3","py-2");
// return btn;
// };

// Categories.forEach((category) => root.append (categoryButton(categoryName)));
// root.append(title);