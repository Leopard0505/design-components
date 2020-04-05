<template>
  <div class="container">
    <CommonSidebar />
    <main id="main">
      <CommonContent />
    </main>
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
  background-color: #1d65f1;
}
.container {
  display: flex;
  justify-content: flex-start;
  padding: 15px;
}
#main {
  width: calc(100% - 200px);
  margin-left: 200px;
}
</style>
