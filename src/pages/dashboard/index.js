import React, { useState, useEffect } from 'react';
// material-ui
import {
  Button,
  Grid,
  Typography
} from '@mui/material';

// project import
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets

import Face4Icon from '@mui/icons-material/Face4';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddVendor from 'pages/vendor/addVendor/AddVendor';
import { getAnalytics } from 'networking/NetworkCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [loading, setLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({})

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getAnalytics();
      if (res.success) {
        setAnalyticsData(res.data);
      } else { toast.error(res.msg) }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {loading ? <Loader /> :
        <>
          <ToastContainer />
          <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={10} sx={{ mb: -2.25 }}>
              <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={2} sx={{ mb: -2.25 }}>
              <AddVendor />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Active Vendor" count="500" percentage={59.3} extra="35,000" icon={<Face4Icon color='primary' fontSize="large" />} />
            </Grid> */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Vendors" count={analyticsData && analyticsData.vendorsCount} percentage={70.5} extra="8,900" icon={<SupervisedUserCircleIcon color='info' fontSize="large" />} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Orders" count={analyticsData && analyticsData.ordersCount} percentage={27.4} isLoss color="warning" extra="1,943" icon={<LocalMallIcon color='success' fontSize="large" />} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Events" count={analyticsData && analyticsData.eventsCount} percentage={27.4} isLoss color="warning" extra="$20,395" icon={<EventNoteIcon color='error' fontSize="large" />} />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

          </Grid></>}

    </>
  );
};

export default DashboardDefault;
