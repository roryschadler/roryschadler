import { GitHub } from '@mui/icons-material';
import { IconButton, Link, Tooltip } from '@mui/material';
import React from 'react';

const GitHubButton = () => {
  return (
    <Link target="_blank" href="https://github.com/roryschadler">
      <Tooltip title="GitHub">
        <IconButton>
          <GitHub fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default GitHubButton;
