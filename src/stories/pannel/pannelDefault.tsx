import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { makeStyles } from '@material-ui/core/styles';

// const pannelDefaultStyles = makeStyles({
//   any: {
//     display: 'inline-block',
//     marginLeft: 'auto'
//   }
// });

const PannelDefault = (component: JSX.Element) => {
  // const classes = pannelDefaultStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpand = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setExpanded(!expanded);
  };
  return {
    Icon: (
      <IconButton onClick={handleExpand} aria-expanded={expanded} aria-label="show more">
        <ExpandMoreIcon />
      </IconButton>
    ),
    Pannel: (
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {component}
      </Collapse>
    )
  };
};
export default PannelDefault;
