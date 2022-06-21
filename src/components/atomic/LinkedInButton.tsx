import { LinkedIn } from '@mui/icons-material';
import { IconButton, Link, Tooltip } from '@mui/material';
import React from 'react';

const LinkedInButton = () => {
  return (
    <Link target="_blank" href="https://www.linkedin.com/in/roryschadler/">
      <Tooltip title="LinkedIn">
        <IconButton>
          <LinkedIn fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default LinkedInButton;
