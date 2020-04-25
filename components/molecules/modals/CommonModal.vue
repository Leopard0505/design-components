<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__overlay" @click="close" />
      <div class="modal__card">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

@Component({
  name: 'MoleculesModalsCommonModal'
})
export default class MoleculesModalsCommonModal extends Vue {
  @Emit('close')
  private close() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: darken($primary, 20%);
    opacity: 0.8;
  }
  &__card {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 15px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 10;
    animation: down 0.5s ease-in;
    @keyframes down {
      0% {
        top: 40%;
        opacity: 0;
      }
      100% {
        top: 50%;
        opacity: 1;
      }
    }
  }
}
</style>
