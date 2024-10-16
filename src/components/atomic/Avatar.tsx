import { Avatar as MuiAvatar, IconButton, Link } from '@mui/material';

const Avatar = () => (
  <Link target="_blank" href="https://www.linkedin.com/in/roryschadler/">
    <IconButton aria-label="Contact Me">
      <MuiAvatar
        alt="Rory Schadler"
        // pre-hashed email
        src="https://www.gravatar.com/avatar/1cd2dd8a3bd1e9158855bdd0b15805bd"
      />
    </IconButton>
  </Link>
);

export default Avatar;
