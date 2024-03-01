// import Routes from 'routes';
import { Routes, Route } from "react-router-dom"
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Login from "pages/authentication/Login";
import DashboardDefault from "pages/dashboard/index";
import VendorList from "pages/vendor-list/VendorList";
import EventList from "pages/event-list/EventList";
import MainLayout from "layout/MainLayout/index";

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<DashboardDefault />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ScrollTop>
  </ThemeCustomization >
);

export default App;
