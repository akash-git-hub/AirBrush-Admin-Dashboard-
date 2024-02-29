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
import { PlusCircleOutlined } from '@ant-design/icons';
import Face4Icon from '@mui/icons-material/Face4';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Box, Modal, TextField } from '../../../node_modules/@mui/material/index';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [logo, setLogo] = useState(null);
  const handleLogoChange = (event) => {
    // Logic to handle file upload
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={10} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={2} sx={{ mb: -2.25 }}>
        <Button className="w-100" type="button" variant="contained" size="large" onClick={handleOpen} startIcon={<PlusCircleOutlined />}>Add Vendor</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              Add Vendor
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '95%' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleLogoChange}
                />
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px'
                }}>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="mb-2 mt-4" sx={{
                      background: 'transparent',
                      color: '#000',
                      border: '1px dashed #000',
                      width: '100%',
                      marginBottom: '10px',
                      marginTop: '10px',
                      position: 'relative',
                      '&:hover': {
                        background: 'transparent',
                        color: '#1777FF',
                        border: '1px dashed #1777FF',
                      }
                    }}>
                      {logo && (
                        <img src={logo} alt="Logo" style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'contain'
                        }} />
                      )}
                      {!logo && <span>Upload Logo</span>}
                    </Button>
                  </label>
                </Box>

                <TextField
                  label="Name"
                  id="outlined-size-small"
                  defaultValue="Name"
                  size="large"
                  className="w-100 mb-2 mt-4"
                  type="text"
                />
                <TextField
                  label="Email"
                  id="outlined-size-small"
                  defaultValue="Superadmin@gmail.com"
                  size="large"
                  className="w-100 mb-2 mt-4"
                  type="email"
                />
                <TextField
                  label="Mobile No"
                  id="outlined-size-small"
                  defaultValue="+91-8989898911"
                  size="large"
                  className="w-100 mb-2 mt-4"
                  type="number"
                />
                <TextField
                  label="Password"
                  id="outlined-size-small"
                  defaultValue="Password"
                  size="large"
                  className="w-100 mb-2 mt-4"
                  type="password"
                />
                <TextField
                  label="Organization Name"
                  id="outlined-size-small"
                  defaultValue="organization name"
                  size="large"
                  className="w-100 mb-2 mt-4"
                />
                <Button type="button" variant="contained" size="large" sx={{
                  width: '100%',
                  mt: '5px'
                }} >Create Vendor</Button>
              </div>

            </Box>
          </Box>
        </Modal>
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
