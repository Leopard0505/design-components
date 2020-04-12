import { storiesOf } from '@storybook/vue'
import CommonTable from './CommonTable.vue'

storiesOf('Molecules/tables', module).add(
  'CommonTable',
  () => ({
    components: { CommonTable },
    template: `<CommonTable />`,
    description: {
      CommonTable: {
        events: {
          input: '入力内容を親コンポーネントに受け渡す'
        }
      }
    }
  }),
  {
    info: true,
    notes: `
        # Common Table
        * テーブルコンポーネント
      `
  }
)
