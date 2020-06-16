<template>
  <div class="signin-wrap">
    <CommonSignin />
  </div>
</template>

<script>
import CommonSignin from '../components/organisms/signs/CommonSignin.vue'
export default {
  layout: 'blank',
  components: {
    CommonSignin
  }
}
</script>

<style lang="scss" scoped>
.signin-wrap {
  display: flex;
  justify-content: center;
}
</style>
