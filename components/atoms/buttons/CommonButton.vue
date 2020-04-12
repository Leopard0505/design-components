<template>
  <button class="btn" :class="`btn__${type}`">
    <slot>{{ type }}</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsButtonsCommonButton'
})
export default class AtomsButtonsCommonButton extends Vue {
  @Prop({ type: String, default: 'primary' }) type!: string
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  height: 50px;
  color: #fff;
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__primary {
    background-color: $primary;
    border: solid 1px $primary;
  }
  &__success {
    background-color: $success;
    border: solid 1px $success;
  }
  &__danger {
    background-color: $danger;
    border: solid 1px $danger;
  }
}
</style>
