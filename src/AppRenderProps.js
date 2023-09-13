import CompanyItem from "./features/render-props/CompanyItem.jsx";
import List from "./features/render-props/List.jsx";
import ProductItem from "./features/render-props/ProductItem.jsx";

import { companies, products } from "./features/render-props/data";

function App() {
  return (
    <div>
      <div>
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
      </div>
      <div>
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem key={company.productName} company={company} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
