import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs/vue'
import RoundButton from './RoundButton.vue'

storiesOf('Atoms/buttons', module).add(
  'RoundButton',
  () => ({
    components: { RoundButton },
    template: `<RoundButton
        :type="type"
      />`,
    props: {
      type: {
        type: String,
        default: text('type', 'primary')
      }
    },
    description: {
      RoundButton: {
        props: {
          type:
            'typeは primary, success, danger などは利用可能. 詳細はNotesに記載.'
        },
        events: {
          input: '入力内容を親コンポーネントに受け渡す'
        }
      }
    }
  }),
  {
    info: true,
    notes: `
        # Round Button

        ## Props
        * type
          * string
            * typeは primary, success, danger などは利用可能
      `
  }
)
