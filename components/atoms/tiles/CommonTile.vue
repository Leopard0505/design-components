<template>
  <div class="tile">
    <font-awesome-icon class="icon" :icon="['far', icon]" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsTilesCommonTile'
})
export default class AtomsTilesCommonTile extends Vue {
  @Prop({ type: String, default: '' }) icon!: string
}
</script>

<style lang="scss" scoped>
.tile {
  width: 100%;
  height: 100px;
  background-color: $primary;
  color: #fff;
  font-size: 3rem;
  border: solid 1px $primary;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
