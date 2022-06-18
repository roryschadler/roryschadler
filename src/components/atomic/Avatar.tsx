import React from 'react';

import { Avatar as MuiAvatar } from '@mui/material';
import md5 from 'crypto-js/md5';

const email = `roryschadler@gmail.com`;
const src = `https://www.gravatar.com/avatar/${md5(email)}`;

const Avatar = () => {
  return <MuiAvatar alt="Rory Schadler" src={src}></MuiAvatar>;
};

export default Avatar;
