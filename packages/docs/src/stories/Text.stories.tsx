import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@igor-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, saepe aspernatur laudantium non odit rerum reprehenderit sed quisquam laborum pariatur veniam, accusantium voluptatem nulla blanditiis temporibus tempore optio iste quaerat.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text Properties',
    as: 'strong',
  },
}
