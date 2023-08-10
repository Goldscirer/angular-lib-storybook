import {Meta, StoryObj} from "@storybook/angular";
import { CustomButtonComponent } from "./custom-button.component";

const meta: Meta<CustomButtonComponent> = {
  title: 'Custom button',
  component: CustomButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: CustomButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CustomButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};
