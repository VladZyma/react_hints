import ProductItem from "./ProductItem";

function ProductList({ items }) {
  return (
    <ul>
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
