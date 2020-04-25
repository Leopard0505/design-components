<template>
  <div class="login-wrap">
    <CommonSign />
  </div>
</template>

<script>
import CommonSign from '../components/organisms/signs/CommonSign.vue'
export default {
  layout: 'blank',
  components: {
    CommonSign
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  display: flex;
  justify-content: center;
}
</style>
