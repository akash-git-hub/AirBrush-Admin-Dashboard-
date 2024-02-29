// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/icons/color.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <img src={logo} className='img-fluid' alt="Logo" />
    </>
  );
};

export default Logo;
