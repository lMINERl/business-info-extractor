import React, { useMemo } from 'react';
import { Typography, Button, Menu, MenuItem } from '@material-ui/core';

export const MenuDefault = (props: {
  shape?: {
    buttonIcon?: JSX.Element;
  };
  content?: {
    buttonName?: string;
    menuList?: string[];
  };
  actions?: {
    menuClose?: any;
    menuItemClick?: any;
    buttonClick?: any;
  };
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedItem, setStelectedItem] = React.useState<string>('');

  const content = props.content ?? { menuList: [] };
  const menuList = content.menuList ?? [];
  const buttonName = content.buttonName ?? '';

  const shape = props.shape ?? { buttonIcon: null };
  const buttonIcon = shape.buttonIcon ?? null;

  const actions = props.actions ?? { menuItemClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {} };
  const menuItemClick = actions.menuItemClick ?? function (event: React.MouseEvent<HTMLLIElement, MouseEvent>) {};
  const menuClose =
    actions.menuClose ??
    function () {
      setOpen(false);
    };

  const list = useMemo(
    () =>
      menuList.map((menuItem) => (
        <MenuItem
          key={menuItem}
          selected={menuItem === selectedItem}
          onClick={(e) => {
            menuItemClick(e);
            setAnchorEl(e.currentTarget);
            setStelectedItem(menuItem);
            setOpen(false);
          }}
        >
          {menuItem}
        </MenuItem>
      )),
    [menuList, menuItemClick, selectedItem]
  );

  const menuButton = useMemo(
    () => (
      <Button
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
          setOpen(true);
        }}
      >
        <Typography component="h6"> {buttonName}</Typography>
        {buttonIcon}
      </Button>
    ),
    [buttonIcon, buttonName]
  );

  return (
    <React.Fragment>
      {menuButton}
      <div>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => {
            menuClose();
            setOpen(false);
          }}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch'
            }
          }}
        >
          {list}
        </Menu>
      </div>
    </React.Fragment>
  );
};
