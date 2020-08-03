import React from 'react';
import { action } from '@storybook/addon-actions';
//import { Button } from '@storybook/react/demo';
import {Button} from 'antd';
import "antd/lib/button/style";
import 'antd/dist/antd.css';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button type="primary" onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button type="primary" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
