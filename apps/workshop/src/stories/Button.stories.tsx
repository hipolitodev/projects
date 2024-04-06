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

export const Link = Template.bind({});
Link.args = {
  children: "Link Button",
  variant: "link",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};
