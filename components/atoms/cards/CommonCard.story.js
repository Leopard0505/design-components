import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs/vue'
import CommonCard from './CommonCard.vue'

storiesOf('Atoms/cards', module)
  .add(
    'CommonCard',
    () => ({
      components: { CommonCard },
      template: `<CommonCard
        :type="type"
        :icon="icon">
        <span slot="title">17 hours</span>
        <span slot="subtitle">Last recovery</span>
        <span slot="body">
          Slow down! Longer
          recovery recommended.
        </span>
      </CommonCard>`,
      props: {
        type: {
          type: String,
          default: text('type', 'primary'),
        },
        icon: {
          type: String,
          default: text('icon', 'clock'),
        },
      },
      description: {
        CommonCard: {
          props: {
            type: 'typeは primary, success, danger などは利用可能. 詳細はNotesに記載.',
            icon: 'iconは fontAwesomeアイコン は利用可能. 詳細はNotesに記載.',
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
        # Common Card

        ## Props
        * type
          * string
            * typeは　primary, success, danger などは利用可能
        * icon
          * string
            * iconは fontAwesomeアイコン は利用可能
        
        ## Slots
        * title
          * string
            * titleは　テキストは利用可能
        * subtitle
          * string
            * subtitleは　テキストは利用可能
        * body
          * string
            * bodyは　テキストは利用可能
      `,
    })