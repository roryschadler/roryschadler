import { LinkedIn } from '@mui/icons-material';
import {
  IconButton,
  Link,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const LinkedInButton = () => {
  const theme = useTheme();
  return (
    <Link target="_blank" href="https://www.linkedin.com/in/roryschadler/">
      <Tooltip title="LinkedIn">
        <IconButton
          size={
            useMediaQuery(theme.breakpoints.down('sm')) ? 'medium' : 'large'
          }
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default LinkedInButton;
