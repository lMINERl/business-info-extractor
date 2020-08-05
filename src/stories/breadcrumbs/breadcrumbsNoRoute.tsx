import React, { useMemo } from 'react';
import { Link, Breadcrumbs } from '@material-ui/core';

const BreadcrumbsNoRoute = (props: {
  options?: { maxItems: number };
  dispatchCurrentLocation: (action: { key: string; index: number }) => void;
  previousLocations?: { key: string }[];
  currentLocation?: { key: string };
}) => {
  const options = props.options ?? { maxItems: 5 };
  const prevLocations = props.previousLocations ?? [];
  const currLocation = props.currentLocation ?? { key: 'Home' };

  const prevLocLinks = useMemo(
    () =>
      prevLocations.map(({ key }, index: number) => {
        return (
          <Link
            key={index}
            color="inherit"
            href="#"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              event.preventDefault();
              props.dispatchCurrentLocation({ key: key, index: index });
            }}
          >
            {key}
          </Link>
        );
      }),
    [props, prevLocations]
  );
  let currLocLink = useMemo(
    () => (
      <Link
        color="textPrimary"
        href="#"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
      >
        {currLocation.key}
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

export default BreadcrumbsNoRoute;
