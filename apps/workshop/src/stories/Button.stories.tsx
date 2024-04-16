import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from "@hipolitodev/ui/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Soft = Template.bind({});
Soft.args = {
  children: "Soft Button",
  variant: "soft",
};
