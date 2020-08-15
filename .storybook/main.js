// const { configure } = require('@storybook/react');

// automatically import all files ending in *.stories.js
// configure(require.context('../src/', true, /\.stories\.ts$/), module);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-links']
};
