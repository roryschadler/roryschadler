import { render, screen } from '@testing-library/react';

import Item, { ItemProps } from '../Item';

describe('Item', () => {
  const mockItemProps: ItemProps = {
    title: 'Test Item',
    key: 'test-item',
    startDate: 'January 2022',
    subItems: [],
    ariaProps: {},
  };

  it('renders the title', () => {
    render(<Item {...mockItemProps} key={mockItemProps.key} />);
    const titleElement = screen.getByText('Test Item');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the start date', () => {
    render(<Item {...mockItemProps} key={mockItemProps.key} />);
    const startDateElement = screen.getByText('January 2022', { exact: false });
    expect(startDateElement).toBeInTheDocument();
  });

  it('renders the end date if provided', () => {
    const itemPropsWithEndDate: ItemProps = {
      ...mockItemProps,
      endDate: 'December 2022',
    };
    render(<Item {...itemPropsWithEndDate} key={itemPropsWithEndDate.key} />);
    const endDateElement = screen.getByText('December 2022', { exact: false });
    expect(endDateElement).toBeInTheDocument();
  });

  it('renders the subtitle if provided', () => {
    const itemPropsWithSubtitle: ItemProps = {
      ...mockItemProps,
      subtitle: 'Test Subtitle',
    };
    render(<Item {...itemPropsWithSubtitle} key={itemPropsWithSubtitle.key} />);
    const subtitleElement = screen.getByText('Test Subtitle', { exact: false });
    expect(subtitleElement).toBeInTheDocument();
  });

  describe('handles sub items', () => {
    it('renders a list of sub items if provided', () => {
      const itemPropsWithSubItems: ItemProps = {
        ...mockItemProps,
        subItems: [
          {
            title: 'Test Sub Item 1',
            key: 'test-sub-item-1',
            text: ['Test Sub Item 1 Text'],
          },
          {
            title: 'Test Sub Item 2',
            key: 'test-sub-item-2',
            text: ['Test Sub Item 2 Text'],
          },
        ],
      };
      render(
        <Item {...itemPropsWithSubItems} key={itemPropsWithSubItems.key} />
      );
      const subItemElement1 = screen.getByText('Test Sub Item 1 Text');
      expect(subItemElement1).toBeInTheDocument();

      const subItemElement2 = screen.getByText('Test Sub Item 2 Text');
      expect(subItemElement2).toBeInTheDocument();
    });

    it('does not render a sub item if it is disabled', () => {
      const itemPropsWithDisabledSubItem: ItemProps = {
        ...mockItemProps,
        subItems: [
          {
            title: 'Test Sub Item 1',
            key: 'test-sub-item-1',
            text: ['Test Sub Item 1 Text'],
          },
          {
            title: 'Test Sub Item 2',
            key: 'test-sub-item-2',
            text: ['Test Sub Item 2 Text'],
            disabled: true,
          },
        ],
      };
      render(
        <Item
          {...itemPropsWithDisabledSubItem}
          key={itemPropsWithDisabledSubItem.key}
        />
      );
      const subItemElement1 = screen.getByText('Test Sub Item 1 Text');
      expect(subItemElement1).toBeInTheDocument();

      const subItemElement2 = screen.queryByText('Test Sub Item 2 Text');
      expect(subItemElement2).not.toBeInTheDocument();
    });

    it('renders the sub item start date if provided', () => {
      const itemPropsWithSubItemStartDate: ItemProps = {
        ...mockItemProps,
        subItems: [
          {
            title: 'Test Sub Item 1',
            key: 'test-sub-item-1',
            text: ['Test Sub Item 1 Text'],
            startDate: 'March 2022',
          },
        ],
      };
      render(
        <Item
          {...itemPropsWithSubItemStartDate}
          key={itemPropsWithSubItemStartDate.key}
        />
      );
      const subItemStartDateElement = screen.getByText('March 2022', {
        exact: false,
      });
      expect(subItemStartDateElement).toBeInTheDocument();
    });
  });

  it('renders a divider if not the last item', () => {
    const itemPropsNotLast: ItemProps = {
      ...mockItemProps,
      last: false,
    };
    render(<Item {...itemPropsNotLast} key={itemPropsNotLast.key} />);
    const dividerElement = screen.getByTestId('divider');
    expect(dividerElement).toBeInTheDocument();
  });

  it('does not render a divider if the last item', () => {
    const itemPropsLast: ItemProps = {
      ...mockItemProps,
      last: true,
    };
    render(<Item {...itemPropsLast} key={itemPropsLast.key} />);
    const dividerElement = screen.queryByTestId('divider');
    expect(dividerElement).not.toBeInTheDocument();
  });
});
