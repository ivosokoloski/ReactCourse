
import { Product } from "./Product";
export function ProdictsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
            <Product key={product.id} product={product} loadCart={loadCart}></Product>
        );
      })}
    </div>
  );
}
