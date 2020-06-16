<template>
  <div class="signup-wrap">
    <CommonSignup />
  </div>
</template>

<script>
import CommonSignup from '../components/organisms/signs/CommonSignup.vue'
export default {
  layout: 'blank',
  components: {
    CommonSignup
  }
}
</script>

<style lang="scss" scoped>
.signup-wrap {
  display: flex;
  justify-content: center;
}
</style>
