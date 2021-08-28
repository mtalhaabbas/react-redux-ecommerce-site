import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const AllProducts = () => {
    const products = useSelector((state) => state.allProducts.products);


    return(
<>
{Object.keys(products).length === 0 ? <div>Loading...</div> :

<section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

          {products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
       

    <>
   
      <Link class="lg:w-1/4 md:w-1/2 p-4 w-full" to={`/product/${id}`}>
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image} />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
          <p class="mt-1">${price}</p>
        </div>
      </Link>
         
    
    </>
      );
    })

}
</div>
</div>
</section>}
</>

    )
 
 

}

export default AllProducts;
