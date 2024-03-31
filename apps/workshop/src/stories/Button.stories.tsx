import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from "@repo/ui/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Link = Template.bind({});
Link.args = {
  label: "Link Button",
  variant: "link",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};
