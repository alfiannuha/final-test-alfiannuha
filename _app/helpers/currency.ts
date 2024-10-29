export const formatCurrency = (value: number = 0, currency = "IDR") => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency,
  }).format(value);
};
