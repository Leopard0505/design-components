import { storiesOf } from '@storybook/vue'
import CommonSignout from './CommonSignout.vue'

storiesOf('Molecules/signouts', module).add(
  'CommonSignout',
  () => ({
    components: { CommonSignout },
    template: `<CommonSignout />`,
    description: {
      CommonSignout: {
        events: {
          input: '入力内容を親コンポーネントに受け渡す'
        }
      }
    }
  }),
  {
    info: true,
    notes: `
        # Common Signout
        * サインアウトコンポーネント
          * サインアウト処理を行う
      `
  }
)
