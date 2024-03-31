// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
  
    <Typography variant="subtitle2" component={Link} href="https://ketan-portfolio.netlify.app/" target="_blank" underline="hover">
      &copy; Ketan Karaval
    </Typography>
  </Stack>
);

export default AuthFooter;
