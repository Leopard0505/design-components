import { storiesOf } from '@storybook/vue'
import CommonContent from './CommonContent.vue'

storiesOf('Molecules/sidebars', module).add(
  'CommonContent',
  () => ({
    components: { CommonContent },
    template: `<CommonContent />`,
    description: {
      CommonContent: {
        events: {
          input: '入力内容を親コンポーネントに受け渡す'
        }
      }
    }
  }),
  {
    info: true,
    notes: `
        # Common Sidebar
        
      `
  }
)
