<template>
  <div id="multiple-radial-bar-chart">
    <client-only>
      <VueApexCharts
        type="radialBar"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'OrganismsChartsMultipleRadialBar',
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  }
})
export default class OrganismsChartsMultipleRadialBar extends Vue {
  series = [44, 55, 67, 83]
  chartOptions = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 0,
      offsetY: 0,
      labels: {
        useSeriesColors: true
      },
      markers: {
        size: 0
      },
      formatter: (seriesName: string, opts: any) => {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#multiple-radial-bar-chart {
  background: lighten($primary, 25%);
  border-radius: 10px;
}
</style>
