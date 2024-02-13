import Link from "next/link";
import React from "react";

function ProductList({products}) {
  return <ul className="grid grid-cols-3 gap-5">
    {products.products.map((prod)=>{
        return (
            
    <li className="card w-80 bg-base-100 shadow-xl " key={prod.id}>
    <figure><img src={prod.thumbnail} className="h-60 object-cover" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
       {prod.title}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{prod.description} </p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
      <Link className="btn btn-primary" href={`/product/${prod.id} `}>
      Go To Product</Link>
    </div>
  </li>
        )

    })}

  </ul>
}

export default ProductList;
