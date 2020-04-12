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
  background-color: $primary;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  padding: 15px 0;
  box-sizing: border-box;
}
#main {
  // position: fixed;
  position: relative;
  width: calc(100% - 215px);
  margin-left: 200px;
}
</style>
