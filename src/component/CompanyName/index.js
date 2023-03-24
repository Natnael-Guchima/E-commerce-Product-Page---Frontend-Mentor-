import React from "react";

const CompanyName = ({ companyName }) => {
  return (
    <span className="text-primary-orange uppercase font-semibold tracking-widest mb-2">
      {companyName || "sneaker company"}
    </span>
  );
};

export default CompanyName;
