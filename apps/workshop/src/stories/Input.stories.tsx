import { StoryFn, Meta } from "@storybook/react";
import Input, { InputProps } from "@hipolitodev/ui/Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  id: "email",
  type: "email",
  placeholder: "you@example.com",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: "We'll only use this for spam.",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Not a valid email address.",
};
