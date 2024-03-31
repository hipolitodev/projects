import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from "@repo/ui/Button"; // Ensure Button and ButtonProps are correctly imported
import React from "react"; // Add missing import statement

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) =>
  React.createElement(Button, { ...args });

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
  isDisabled: true,
};
