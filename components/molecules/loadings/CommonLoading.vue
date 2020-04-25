<template>
  <div v-if="loading" id="loading">
    <div class="spinner-wrap">
      <div class="spinner"></div>
    </div>
    <div class="image">
      <img src="/images/icon.svg" alt="icon.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'MoleculesLoadingsCommonLoading'
})
export default class MoleculesLoadingsCommonLoading extends Vue {
  private loading = false

  public start() {
    this.loading = true
  }

  public finish() {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
#loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary;
  text-align: center;
  z-index: 10;
  .spinner-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .spinner {
      width: 500px;
      height: 500px;
      // margin: 250px auto;
      background-color: #fff;
      border-radius: 100%;
      animation: sk-scaleout 3s infinite ease-in-out;
      opacity: 0.6;
    }
    /* ローディングアニメーション */
    @keyframes sk-scaleout {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
  .image {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
