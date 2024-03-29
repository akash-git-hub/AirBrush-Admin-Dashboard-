import PropTypes from 'prop-types';
import { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../states/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// assets
import { LogoutOutlined } from '@ant-design/icons';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    // logout
    setLoggedIn(false);
    localStorage.clear();
    navigate("/", { replace: true });
    toast.success("Log out successfully")
  };

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'grey.300';

  return (
    <>
      <ToastContainer />
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <ButtonBase
          sx={{
            p: 0.25,
            bgcolor: open ? iconBackColorOpen : 'transparent',
            borderRadius: 1,
            '&:hover': { bgcolor: 'secondary.lighter' }
          }}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? 'profile-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
            {/* <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} /> */}
            <Typography variant="subtitle1">Super Admin</Typography>
          </Stack>
        </ButtonBase>
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 9]
                }
              }
            ]
          }}
        >
          {({ TransitionProps }) => (
            <Transitions type="fade" in={open} {...TransitionProps}>
              {open && (
                <Paper
                  sx={{
                    boxShadow: theme.customShadows.z1,
                    width: 290,
                    minWidth: 240,
                    maxWidth: 290,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250
                    }
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MainCard elevation={0} border={false} content={false}>
                      <CardContent sx={{ px: 2.5, pt: 3 }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                            <Stack direction="row" spacing={1.25} alignItems="center">
                              <Stack>
                                <Typography variant="h6">Super Admin</Typography>
                                <Typography variant="body2" color="textSecondary">
                                  Air Brush admin
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item>
                            <IconButton size="large" color="secondary" onClick={handleLogout}>
                              <LogoutOutlined />
                            </IconButton>
                            Logout
                          </Grid>
                        </Grid>
                      </CardContent>
                    </MainCard>
                  </ClickAwayListener>
                </Paper>
              )}
            </Transitions>
          )}
        </Popper>
      </Box>
    </>

  );
};

export default Profile;
