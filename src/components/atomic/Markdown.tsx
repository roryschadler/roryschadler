import { Typography, styled } from '@mui/material';
import ReactMarkdown, { Components } from 'react-markdown';

const UL = styled('ul')({});
const LI = styled('li')({});

export const defaultComponentsMap: Components = {
  h1: ({ children }) => (
    <Typography variant="h6" component="h3">
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="body1" component="h4">
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="body1" component="h5">
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      variant="body1"
      component="p"
      sx={{
        marginY: '0.8rem',
      }}
    >
      {children}
    </Typography>
  ),
  ul: ({ children }) => (
    <UL
      sx={{
        marginTop: 0.5,
        ':last-of-type': { marginBottom: 1.5 },
      }}
    >
      {children}
    </UL>
  ),
  li: ({ children }) => <LI>{children}</LI>,
};

const Markdown: typeof ReactMarkdown = (props) => {
  return <ReactMarkdown components={defaultComponentsMap} {...props} />;
};

export default Markdown;
