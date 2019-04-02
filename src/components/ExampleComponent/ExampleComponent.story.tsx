import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';

storiesOf('Component', module)
  .add('primary', () => <Component className="primary" />);
