import { useState } from "react";

function CompanyItem({ company }) {
  const [showDescription, setShoeDescription] = useState(false);

  return (
    <li
      onMouseEnter={() => setShoeDescription(true)}
      onMouseLeave={() => setShoeDescription(false)}
    >
      <p>{company.productName}</p>
      {showDescription && <p>{company.description}</p>}
    </li>
  );
}

export default CompanyItem;
