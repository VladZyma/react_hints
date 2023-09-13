import { useState } from "react";

function CompanyItem({ company }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <p>{company.productName}</p>
      {showDetails && <p>{company.description}</p>}
    </li>
  );
}

export default CompanyItem;
