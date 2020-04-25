<template>
  <div class="error">
    <div class="icon">
      <font-awesome-icon :icon="'times'" />
    </div>
    <h1>{{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404">ページが見つかりません</p>
    <p v-else>エラーが発生しました</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.icon {
  width: 100%;
  height: 300px;
  margin: auto;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: #f00;
  }
}
</style>
