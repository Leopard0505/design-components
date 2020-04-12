<template>
  <button class="icon_button">
    <font-awesome-icon class="icon" :icon="['fas', icon]" />
    <slot>リンク先</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsButtonsIconButton'
})
export default class AtomsButtonsIconButton extends Vue {
  @Prop({ type: String, default: '' }) icon!: string
}
</script>

<style lang="scss" scoped>
.icon_button {
  height: 40px;
  background-color: $primary;
  color: #fff;
  font-size: 0.8rem;
  border: solid 1px $primary;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .icon {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:hover {
    background-color: lighten($primary, 20%);
  }
}
</style>
