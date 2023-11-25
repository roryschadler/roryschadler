import { Typography, TypographyProps } from '@mui/material';

const SectionHeader = (props: TypographyProps) => {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      component="h2"
      marginBottom="0.8rem"
      {...props}
    />
  );
};

export default SectionHeader;
