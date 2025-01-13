export const PRODUCTS_QUERY = `*[
  _type == "product"
]{_id, name, price, description, image}`;

export const ORDER_HISTORY_QUERY = `*[
  _type == "order"
  && userId == $userId
]{email, username,userId, amountInBTC, transactionDate, transactionType, transactionStatus}`;