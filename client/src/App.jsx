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
import CheckAuth from "./components/common/CheckAuth";
import NotAuth from "./pages/Not-authorized/Not-authorized";

function App() {
  const isAuthenticated = false;
  const user = {
    role: "user",
  };
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                user={user}
              >
              </CheckAuth>
            }
          />
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="listing" element={<ShoppingListing />} />
          </Route>
          <Route path="/unauth-page" element={<NotAuth />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
