import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const VendorList = Loadable(lazy(() => import('pages/vendor-list/VendorList')));
const  EventList = Loadable(lazy(() => import('pages/event-list/EventList')));
const  OrderList = Loadable(lazy(() => import('pages/order-list/OrderList')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'vendor-list',
      element: <VendorList />
    },
    {
      path: 'event-list',
      element: <EventList />
    },
    {
      path: 'vendor-list',
      element: <VendorList />
    },
    {
      path: 'order-list',
      element: <OrderList />
    },

  ]
};

export default MainRoutes;
