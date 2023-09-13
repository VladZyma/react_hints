import CompanyItem from "./CompanyItem";

function CompaniesList({ items }) {
  return (
    <ul>
      {items.map((company) => (
        <CompanyItem key={company.productName} company={company} />
      ))}
    </ul>
  );
}

export default CompaniesList;
