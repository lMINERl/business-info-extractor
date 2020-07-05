import React, { useMemo } from 'react';

import { Breadcrumbs, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const BreadcrumbsDefault = (props: {
  options?: { maxItems: number };
  dispatchCurrentLocation: (action: { text: string; href: string; index: number }) => void;
  previousLocations?: { text: string; href: string }[];
  currentLocation?: { text: string; href: string };
}) => {
  const history = useHistory();

  const options = props.options ?? { maxItems: 5 };
  const prevLocations = props.previousLocations ?? [];
  const currLocation = props.currentLocation ?? { text: 'Home', href: '/' };

  // on any current location change it automaticly push to history
  React.useEffect(() => {
    history.push(currLocation.href);
  }, [currLocation.href, history]);

  const prevLocLinks = useMemo(
    () =>
      prevLocations.map(({ text, href }, index: number) => {
        return (
          <Link
            key={index}
            color="inherit"
            href={href}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              event.preventDefault();
              props.dispatchCurrentLocation({ text: text, href: href, index: index });
            }}
          >
            {text}
          </Link>
        );
      }),
    [props, prevLocations]
  );
  let currLocLink = useMemo(
    () => (
      <Link
        color="textPrimary"
        href={currLocation.href}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
      >
        {currLocation.text}
      </Link>
    ),
    [currLocation]
  );

  return (
    <Breadcrumbs maxItems={options.maxItems} aria-label="breadcrumb">
      {prevLocLinks}
      {currLocLink}
    </Breadcrumbs>
  );
};
