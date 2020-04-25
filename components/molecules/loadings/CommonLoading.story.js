import { storiesOf } from '@storybook/vue'
import CommonLoading from './CommonLoading.vue'

storiesOf('Molecules/loading', module).add(
  'CommonLoading',
  () => ({
    components: { CommonLoading },
    template: `<CommonLoading />`,
    description: {
      CommonLoading: {
        events: {
          input: '入力内容を親コンポーネントに受け渡す'
        }
      }
    }
  }),
  {
    info: true,
    notes: `
        # Common Loading
        
      `
  }
)
