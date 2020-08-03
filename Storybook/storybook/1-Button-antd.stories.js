import React from 'react';
import { action } from '@storybook/addon-actions';
//import { Button } from '@storybook/react/demo';
import {Button} from 'antd';
import "antd/lib/button/style";
import 'antd/dist/antd.css';
import '../css/tailwind.css';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button className="font-semibold" type="primary" onClick={action('clicked')}>Hello Button</Button>;
export const Text2 = () => <Button className="text-black" type="primary"> Hello Button </Button>

export const Emoji = () => (
  <Button type="primary" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
