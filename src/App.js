import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Login from "pages/authentication/Login";
import MainLayout from "layout/MainLayout/index";
import VendorList from "pages/vendor/vendorList/VendorList";
import EventList from "pages/event-list/EventList";
import DashboardDefault from "pages/dashboard/index";
import { AuthContext } from "./states/AuthContext";
import { useContext } from "react";
import ErrorPage from "pages/ErrorPage";

const App = () => {
  const navigate = useNavigate()
  const { loggedIn } = useContext(AuthContext);
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/admin" /> : <Login />} />
          <Route
            path="/admin"
            element={loggedIn ? <MainLayout /> : <Navigate to="/" />}
          >
            <Route path="/admin/dashboard" element={loggedIn ? <DashboardDefault /> : <Navigate to="/" />} />
            <Route path="/admin/vendor-list" element={loggedIn ? <VendorList /> : <Navigate to="/" />} />
            <Route path="/admin/event-list" element={loggedIn ? <EventList /> : <Navigate to="/" />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
