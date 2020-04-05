import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs/vue'
import CommonButton from './CommonButton.vue'

storiesOf('Atoms/buttons', module)
  .add(
    'CommonButton',
    () => ({
      components: { CommonButton },
      template: `<CommonButton
        :type="type"
      />`,
      props: {
        type: {
          type: String,
          default: text('type', 'primary'),
        },
      },
      description: {
        CommonButton: {
          props: {
            type: 'typeは primary, success, danger などは利用可能. 詳細はNotesに記載.',
          },
          events: {
            input: '入力内容を親コンポーネントに受け渡す',
          },
        },
      },
    }),
    {
      info: true,
      notes: `
        # Common Button

        ## Props
        * type
          * string
            * typeは primary, success, danger などは利用可能
      `,
    })