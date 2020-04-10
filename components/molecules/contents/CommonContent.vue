<template>
  <div class="content">
    <div class="content_wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'MoleculesContentsCommonContent'
})
export default class MoleculesContentsCommonContent extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  min-height: 100%;
  background-color: #1d65f1;
  border-radius: 20px;

  &_wrapper {
    width: 100%;
    min-height: 95vh;
    background-color: #f0f6fb;
    border-radius: 20px;
  }
}
</style>
