function ProductItem({ product }) {
  return (
    <li>
      <p>{product.productName}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </li>
  );
}

export default ProductItem;
