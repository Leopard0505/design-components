<template>
  <div>
    <CommonSidebar />
    <div class="container">
      <main id="main">
        <CommonContent />
      </main>
    </div>
  </div>
</template>

<script>
import CommonSidebar from '../components/molecules/sidebars/CommonSidebar.vue'
import CommonContent from '../components/molecules/contents/CommonContent.vue'
export default {
  components: {
    CommonSidebar,
    CommonContent
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: $primary !important;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  @include mq(xsmall) {
    padding: 15px;
  }
  @include mq(medium) {
    padding: 15px 0;
  }
}
#main {
  // position: fixed;
  position: relative;
  @include mq(xsmall) {
    width: 100%;
    margin-left: 0;
  }
  @include mq(medium) {
    width: calc(100% - 215px);
    margin-left: 200px;
  }
}
</style>
