import React, { useMemo } from 'react';

const Route = (props: {
  component: (props: any) => JSX.Element;
  props: { [key: string]: any };
}) => {
  const component = useMemo(() => <props.component {...props.props} />, [props.props]);
  return component;
};

const RouteDefault = (props: {
  selectedKey: string;
  components: {
    key: string;
    component: (props: any) => JSX.Element;
    props?: { [key: string]: any };
  }[];
}) => {
  const components = useMemo(
    () =>
      props.components.map((c) => (
        <Route key={c.key} component={c.component} props={c.props ?? {}} />
      )),
    [props.components]
  );
  const component = components.filter((c) => c.key === props.selectedKey);

  return <div>{component.length ? component[0] : null}</div>;
};

export default RouteDefault;
