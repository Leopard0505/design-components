import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs/vue'
import InputForm from './InputForm.vue'

storiesOf('Atoms/forms', module)
  .add(
    'InputForm',
    () => ({
      components: { InputForm },
      template: `<InputForm
        :type="type"
      />`,
      props: {
        type: {
          type: String,
          default: text('type', 'password'),
        },
      },
      description: {
        InputForm: {
          props: {
            type: 'typeは text, password, date などは利用可能. 詳細はNotesに記載.',
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
        # Input Form

        ## Props
        * type
          * string
            * typeは text, password, date などは利用可能
            * file, image は別コンポーネントで管理する
      `,
    })