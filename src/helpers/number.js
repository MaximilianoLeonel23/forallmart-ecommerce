export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
};

export const calculateInvPrice = (inv) => {
  let price = 0;
  inv?.invoice_details_report.map((item) => {
    price += item.invoice_detail.unit_price;
  });
  return price;
};