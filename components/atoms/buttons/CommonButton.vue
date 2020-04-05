<template>
  <transition>
    <button
      class="btn"
      :class="`btn__${type}`"
      @click="click"
    >
      <slot>{{ type }}</slot>
    </button>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsButtonsCommonButton'
})
export default class AtomsButtonsCommonButton extends Vue {
  @Prop({ type: String, default: 'primary' }) type: string
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
  transition: .3s;
  
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__primary {
    background-color: #1D65F1;
    border: solid 1px #1D65F1;
  }
  &__success {
    background-color: #1DF13F;
    border: solid 1px #1DF13F;
  }
  &__danger {
    background-color: #F1501D;
    border: solid 1px #F1501D;
  }
}
</style>