import { storiesOf } from '@storybook/vue'
import CommonSidebar from './CommonSidebar.vue'

storiesOf('Molecules/sidebars', module).add(
  'CommonSidebar',
  () => ({
    components: { CommonSidebar },
    template: `<CommonSidebar />`,
    description: {
      CommonSidebar: {
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
