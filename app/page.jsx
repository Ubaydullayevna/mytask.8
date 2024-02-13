"use client"

import ProductList from "./components/ProductList"

async function getData () {
  const req = await fetch('https://dummyjson.com/products',)
  const data = await req.json()
  return data
}

export default async function Home() {
  const data = await getData()
  console.log(data);

  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-green-900 font-medium ">New Next Project</h1>
      <ProductList products={data} />
    </main>
  );
} 
