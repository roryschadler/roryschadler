import { Divider, Typography, styled, Stack } from '@mui/material';

const LI = styled('li')({});
const UL = styled('ul')({});

interface ItemInterface {
  title: string;
  key: string;
  startDate: string;
  endDate?: string;
  subItems: {
    title?: string;
    key: string;
    text?: (string | string[])[];
    startDate?: string;
    endDate?: string;
    disabled?: boolean;
  }[];
  subtitle?: string;
  last?: boolean;
}

export type ItemAriaProps = {
  [Property in keyof ItemInterface]?: string;
};

export interface ItemProps extends ItemInterface {
  ariaProps: ItemAriaProps;
}

const Item = ({
  title,
  startDate,
  endDate,
  subItems,
  subtitle,
  last,
  ariaProps,
}: ItemProps) => {
  const {
    title: ariaTitle,
    subItems: ariaSubItems,
    subtitle: ariaSubtitle,
  } = ariaProps;
  return (
    <>
      <Stack aria-label={title}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body1"
            display="inline"
            aria-label={[ariaTitle, ariaSubtitle].join(', ')}
          >
            <b>{title}</b>
            {subtitle && `, ${subtitle}`}
          </Typography>
          <Typography fontWeight="bold" variant="body1" aria-label="Dates">
            {startDate} — {endDate ?? 'Present'}
          </Typography>
        </Stack>
        {subItems
          .filter((item) => !item.disabled)
          .map((subItem) => (
            <Stack key={subItem.key}>
              <Typography variant="body1" aria-label={ariaSubItems}>
                {subItem.title}
              </Typography>
              {subItem.startDate && (
                <Typography variant="body2" aria-label="Dates">
                  {subItem.startDate} — {subItem.endDate ?? 'Present'}
                </Typography>
              )}
              {subItem.text && (
                <UL
                  sx={{
                    marginTop: 0.5,
                    ':last-of-type': { marginBottom: 1.5 },
                  }}
                  aria-label="Detail"
                >
                  {subItem.text.map((displayText, textIndex) => (
                    <LI key={textIndex}>
                      {Array.isArray(displayText)
                        ? displayText.join(' ')
                        : displayText}
                    </LI>
                  ))}
                </UL>
              )}
            </Stack>
          ))}
      </Stack>
      {last || <Divider sx={{ marginBottom: 1.5 }} data-testid="divider" />}
    </>
  );
};

export default Item;
