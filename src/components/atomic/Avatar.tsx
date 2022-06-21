import React from 'react';

import { Avatar as MuiAvatar, IconButton, Link, Tooltip } from '@mui/material';
import md5 from 'crypto-js/md5';

const email = `roryschadler@gmail.com`;
const src = `https://www.gravatar.com/avatar/${md5(email)}`;

const Avatar = () => {
  return (
    <Link target="_blank" href="https://www.linkedin.com/in/roryschadler/">
      <Tooltip title="Contact Me on LinkedIn">
        <IconButton>
          <MuiAvatar alt="Rory Schadler" src={src} />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default Avatar;
