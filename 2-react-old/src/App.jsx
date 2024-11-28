export default function App(){
    const title = "Product Categories";
    const Categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ];

     return (
        <div id="category-section" className="p-5">
           <p>{title}</p>
            <div>
                {
                    Categories.map(category => (<button className="border border-black px-3 py-1 me-2 mt-4">{category}</button>))
                }
            </div>
        </div>
        
     );
}