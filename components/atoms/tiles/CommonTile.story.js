import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs/vue'
import CommonTile from './CommonTile.vue'

storiesOf('Atoms/tiles', module).add(
  'CommonTile',
  () => ({
    components: { CommonTile },
    template: `<CommonTile
        :icon="icon"
      />`,
    props: {
      icon: {
        type: String,
        default: text('icon', 'moon')
      }
    },
    description: {
      CommonTile: {
        props: {
          icon: 'iconは font awesome icon は利用可能. 詳細はNotesに記載.'
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
        # Common Tile

        ## Props
        * icon
          * string
            * iconは font awesome icon は利用可能
      `
  }
)
