import React, { Suspense } from 'react';
import RouteDefault from '../../stories/route/routeDefault';

const ComponentA = React.lazy(() => {
  return import('../componentA');
});
const ComponentB = React.lazy(() => {
  return import('../componentB');
});
const ComponentC = React.lazy(() => {
  return import('../componentC');
});

const Dashboard = (props: {}) => {
  const [selected, setSelected] = React.useState('A');

  const tabs = React.useMemo(
    () => (
      <div style={{ display: 'inline-flex' }}>
        <button onClick={() => setSelected('A')}>Select A</button>
        <button onClick={() => setSelected('B')}>Select B</button>
        <button onClick={() => setSelected('C')}>Select C</button>
      </div>
    ),
    []
  );

  return (
    <div>
      <div>Im Dashboard</div>
      {tabs}
      <RouteDefault
        selectedKey={selected}
        components={[
          {
            component: (props: {}) => (
              <Suspense fallback={<div>loading componentA</div>}>
                <ComponentA />
              </Suspense>
            ),
            key: 'A'
          },
          {
            component: (props: {}) => (
              <Suspense fallback={<div>loading componentB</div>}>
                <ComponentB />
              </Suspense>
            ),
            key: 'B'
          },
          {
            component: (props: {}) => (
              <Suspense fallback={<div>loading componentC</div>}>
                <ComponentC />
              </Suspense>
            ),
            key: 'C'
          }
        ]}
      />
    </div>
  );
};

export default Dashboard;
