import { Navigate, Routes, Route } from "react-router-dom";

//Context
//import CartProvider from "./context/CartContext";
//import ProductsProvider from "./context/ProductContext";

//Components
import Layout from "./components/Layout/Layout";
import ProductsPages from "./pages/ProductsPages";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

//services

function App() {
  return (
    // <CartProvider>
    // <ProductsProvider>
    /* Layout bayad inja bashe ta betunim dar Layout ham az state estefade konim va be state dastresi dashte bashim */
    <Layout>
      <Routes>
        {/* <Route path="/" elements={<Navigate to="/products" replace />} /> */}
        {/* mishe be jaye path az index ham estefade kard */}
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPages />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
    // </ProductsProvider>
    // </CartProvider>
  );
}

export default App;
