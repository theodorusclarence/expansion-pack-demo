import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Button from '@/components/buttons/Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello',
};
