<template>
  <vue-good-table v-if="loading" :columns="columns" :rows="rows" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'MoleculesTablesCommonTable'
})
export default class MoleculesTablesCommonTable extends Vue {
  private loading: boolean = false

  private columns = [
    {
      label: 'id',
      field: 'id',
      type: 'number'
    },
    {
      label: 'Name',
      field: 'name'
    },
    {
      label: 'Age',
      field: 'age',
      type: 'number'
    },
    {
      label: 'Created On',
      field: 'createdAt',
      type: 'date',
      dateInputFormat: 'yyyy-MM-dd',
      dateOutputFormat: 'yyyy年MM月dd日'
    },
    {
      label: 'Percent',
      field: 'score',
      type: 'percentage'
    }
  ]

  private rows = [
    { id: 1, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 },
    { id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343 },
    { id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 },
    { id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 },
    { id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 },
    { id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 }
  ]

  private async mounted() {
    this.loading = true
  }
}
</script>

<style lang="scss">
.vgt-table.bordered td,
.vgt-table.bordered th {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>
