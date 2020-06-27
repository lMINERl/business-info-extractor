import React from 'react';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const PannelDefault = (component: JSX.Element) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpand = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setExpanded(!expanded);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleExpand} aria-expanded={expanded} aria-label="show more">
        <ExpandMoreIcon />
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {component}
      </Collapse>
    </React.Fragment>
  );
};
