import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, saepe aspernatur laudantium non odit rerum reprehenderit sed quisquam laborum pariatur veniam, accusantium voluptatem nulla blanditiis temporibus tempore optio iste quaerat.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre sera um `h2` mas pode ser alterado através da propriedade `as`',
      },
    },
  },
}
