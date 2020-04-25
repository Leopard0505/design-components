<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__overlay" @click="close" />
      <div class="modal__card">
        <div class="modal__transform-scale">
          <div class="modal__circle">
            <font-awesome-icon
              class="modal__icon"
              :icon="['far', 'check-circle']"
            />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

@Component({
  name: 'MoleculesModalsSuccessModal'
})
export default class MoleculesModalsSuccessModal extends Vue {
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
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  &__transform-scale {
    padding: 100px 15px 15px 15px;
    background: #fff;
    border-radius: 15px;
    animation: scaleup 0.3s ease-in;
    @keyframes scaleup {
      0% {
        transform: scale(0.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  &__circle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-content: center;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: #fff;
  }
  &__icon {
    font-size: 200px;
    color: $success;
  }
}
</style>
