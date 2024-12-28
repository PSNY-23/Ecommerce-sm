import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminFeatures from "./pages/admin-view/Features";
import ShoppingLayout from "./components/shopping-view/Layout";
import NotFound from "./pages/Not-found/NotFound";
import ShoppingHome from "./pages/shopping-view/Home";
import ShoppingCheckout from "./pages/shopping-view/Checkout";
import ShoppingListing from "./pages/shopping-view/Listing";
import ShoppingAccount from "./pages/shopping-view/Account";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="listing" element={<ShoppingListing />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
