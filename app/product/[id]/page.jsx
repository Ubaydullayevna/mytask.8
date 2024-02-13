async function getData (id) {
    const req = await fetch('https://dummyjson.com/products/' + id)
    const data = await req.json()
    return data
  }

 async function SingleProduct({params}) {
    const singleData = await getData(params.id)
    console.log(singleData);

  return(
    <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-light text-center my-5">{singleData.title}</h1>
    <p className="mb-5">{singleData.description}</p>
   <div className="carousel rounded-box carousel-center  p-4 space-x-4 bg-neutral w-full">
    {singleData.images.map((image)=>{
     return(
      <div className="carousel-item">
        <img className="object-cover rounded h-80" src={image} alt="Burger" />
      </div>
     )
    })}
   </div>

  <button className="btn btn-secondary">Add to card</button>
  </div>
  );
}

export default SingleProduct;
