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
  background-color: $light-gray;
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include overflow-scroll;

  &_wrapper {
    // width: 100%;
    // min-height: 100%;
    // min-height: 95vh;
    // background-color: $light-gray;
    border-radius: 20px;
    padding: 15px;
  }
}
</style>
