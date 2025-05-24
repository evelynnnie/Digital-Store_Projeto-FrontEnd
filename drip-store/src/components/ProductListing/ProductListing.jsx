import ProductCard from "../ProductCard/ProductCard"; 

const ProductListing = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 32,
        width: "100%",
      }}
    >
      {products.map((product) => {
        console.log("Product ID:", product.id);
        return (
          <ProductCard
            key={product.id} 
            id={product.id} 
            image={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        );
      })}
    </div>
  );
};

export default ProductListing;
