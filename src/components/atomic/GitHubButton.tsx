import { GitHub } from '@mui/icons-material';
import {
  IconButton,
  Link,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const GitHubButton = () => {
  const theme = useTheme();
  return (
    <Link target="_blank" href="https://github.com/roryschadler">
      <Tooltip title="GitHub">
        <IconButton
          size={
            useMediaQuery(theme.breakpoints.down('sm')) ? 'medium' : 'large'
          }
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default GitHubButton;
