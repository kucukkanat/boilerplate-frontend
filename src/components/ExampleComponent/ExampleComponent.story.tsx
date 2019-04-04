import React from 'react';
import { storiesOf } from '@storybook/react';
import {ExampleComponent} from './index';

storiesOf('ExampleComponent', module).add('primary', () => <ExampleComponent className="primary" />);
