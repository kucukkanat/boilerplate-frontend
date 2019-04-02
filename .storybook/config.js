import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
