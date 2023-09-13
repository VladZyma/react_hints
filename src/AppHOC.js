import withToggles from "./features/HOC/HOC";
import ProductList from "./features/HOC/ProductList";
import CompaniesList from "./features/HOC/CompaniesList";

import { products, companies } from "./features/HOC/data";

const ProductListWithToggles = withToggles(ProductList);
const CompaniesListWithToggles = withToggles(CompaniesList);

function App() {
  return (
    <div>
      <ProductList items={products} />
      <ProductListWithToggles
        title="Product list with Toggle"
        items={products}
      />
      <hr />
      <CompaniesListWithToggles
        title="Companies list with Toggle"
        items={companies}
      />
    </div>
  );
}

export default App;
