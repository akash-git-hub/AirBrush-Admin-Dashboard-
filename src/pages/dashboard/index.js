import React, { useState } from 'react';
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

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [logo, setLogo] = useState(null);
  // const handleLogoChange = (event) => {
  //   // Logic to handle file upload
  //   const file = event.target.files[0];
  //   if (file) {
  //     setLogo(URL.createObjectURL(file));
  //   }
  // };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={10} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={2} sx={{ mb: -2.25 }}>
        <AddVendor />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Active Vendor" count="500" percentage={59.3} extra="35,000" icon={<Face4Icon color='primary' fontSize="large" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Vendors" count="250" percentage={70.5} extra="8,900" icon={<SupervisedUserCircleIcon color='info' fontSize="large" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Order" count="180" percentage={27.4} isLoss color="warning" extra="1,943" icon={<LocalMallIcon color='success' fontSize="large" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Events" count="124" percentage={27.4} isLoss color="warning" extra="$20,395" icon={<EventNoteIcon color='error' fontSize="large" />} />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 3 */}
      {/* <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid> */}
    </Grid>
  );
};

export default DashboardDefault;
