import { useEffect, useState } from "react";

export const FormattedNum = ({ num }) => {
  const [price, setPrice] = useState(num);

  useEffect(() => {
    setPrice(num);
  }, [num]);

  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);
};
