import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary Button", variant: "primary" }
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" }
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" }
};

export const Loading: Story = {
  args: { children: "Loading...", loading: true }
};
