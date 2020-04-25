<template>
  <button class="btn" :class="`btn__${type}`" @click="click">
    <slot>{{ type }}</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsButtonsCommonButton'
})
export default class AtomsButtonsCommonButton extends Vue {
  @Prop({ type: String, default: 'default' }) type!: string

  @Emit('click')
  private click() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px $gray;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__primary {
    color: #fff;
    background-color: $primary;
    border: solid 1px $primary;
  }
  &__success {
    color: #fff;
    background-color: $success;
    border: solid 1px $success;
  }
  &__danger {
    color: #fff;
    background-color: $danger;
    border: solid 1px $danger;
  }
  &__red-gradient {
    color: #fff;
    background: $red-gradient;
    border: 0px;
  }
}
</style>
