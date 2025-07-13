import "@mantine/core/styles.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import { Layout } from "./components/Layout";

const App = () => (
  <Routes>

    {/* Routes with layout */}
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="order-confirmation/:id" element={<OrderConfirmationPage />} />
    </Route>

    {/* Routes without layout */}
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default App;