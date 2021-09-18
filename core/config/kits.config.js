const utilKitsList = [
  "FormValidator",
  "Paging",
  "AutoUpdate",
  "CustomHeader",
  "Storage",
  "ManualLocate",
  "Sku",
];

const componentKitsList = ["address-picker", "coupon", "product-card", "score"];

const moduleKitsList = [
  "address",
  "order",
  "search",
  "wallet",
  "message",
  "feedback",
  "evaluate",
  "category",
  "product",
];

const allKitsList = [...utilKitsList, ...componentKitsList, ...moduleKitsList];

module.exports = {
  utilKitsList,
  componentKitsList,
  moduleKitsList,
  allKitsList,
};
