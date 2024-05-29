const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

/* category all ya search='' ro migire va dar category ya search gharar mide va baghie maghadir ro dar ...rest gharar mide 
va return rest mikone, pas faghat rest bar migarde va category va search bar nemigarde */
const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  //agar ghheir az maghadire bala bud
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  // console.log(query);

  return query;
};

//hesab kardane initial state dar cartContext
//baraye context estefade mishod
// const sumProducts = (products) => {
//   const itemsCounter = products.reduce(
//     (counter, product) => counter + product.quantity,
//     0
//   );
//   const total = products
//     .reduce((total, product) => total + product.price * product.quantity, 0) //product:mahsul, + mhasul * dar tedad(quantity)
//     .toFixed(2);

//   return { itemsCounter, total }; //ecma6
// };

//products: selectedItems
const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0) //product:mahsul, + mhasul * dar tedad(quantity)
    .toFixed(2);
};
//products: selectedItems
const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  //yani vojude nadarad va error nade3
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  // sumProducts,
  sumPrice,
  sumQuantity,
  productQuantity,
};
