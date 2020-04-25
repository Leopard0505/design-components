<template>
  <button class="round_btn" :class="`round_btn__${type}`">
    <slot>10</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CommonButton from './CommonButton.vue'

@Component({
  name: 'AtomsButtonsRoundButton',
  components: {
    CommonButton
  }
})
export default class AtomsButtonsRoundButton extends Vue {
  @Prop({ type: String, default: 'primary' }) type!: string
}
</script>

<style lang="scss" scoped>
.round_btn {
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: #fff;
  border-radius: 50%;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: 0.3s;

  &__primary {
    @include bg-gradient(180deg, $primary, 20%);
    border: solid 1px $primary;
  }
  &__success {
    @include bg-gradient(180deg, $success, 20%);
    border: solid 1px $success;
  }
  &__danger {
    @include bg-gradient(180deg, $danger, 20%);
    border: solid 1px $danger;
  }
  &__red-gradient {
    background: $red-gradient;
    border: 0px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
