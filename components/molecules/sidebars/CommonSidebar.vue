<template>
  <aside id="sidebar">
    <div class="siderbar-wrap">
      <CommonTile icon="moon" />
      <ul class="sidebar">
        <li class="sidebar_item">
          <nuxt-link class="link" to="/">
            <IconButton class="sidebar_link" icon="home">
              Home
            </IconButton>
          </nuxt-link>
        </li>
        <li class="sidebar_item">
          <nuxt-link class="link" to="/client">
            <IconButton class="sidebar_link" icon="address-book">
              Client
            </IconButton>
          </nuxt-link>
        </li>
        <li class="sidebar_item">
          <nuxt-link class="link" to="/balance">
            <IconButton class="sidebar_link" icon="balance-scale-right">
              Balance
            </IconButton>
          </nuxt-link>
        </li>
        <li class="sidebar_item">
          <nuxt-link class="link" to="/analytics">
            <IconButton class="sidebar_link" icon="chart-line">
              Analytics
            </IconButton>
          </nuxt-link>
        </li>
        <li class="sidebar_item">
          <nuxt-link class="link" to="/business">
            <IconButton class="sidebar_link" icon="briefcase">
              Business
            </IconButton>
          </nuxt-link>
        </li>
        <li class="sidebar_item">
          <nuxt-link class="link" to="/settings">
            <IconButton class="sidebar_link" icon="sliders-h">
              Settings
            </IconButton>
          </nuxt-link>
        </li>
      </ul>
      <CommonSignout />
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CommonTile from '../../atoms/tiles/CommonTile.vue'
import IconButton from '../../atoms/buttons/IconButton.vue'
import CommonSignout from '../../molecules/signouts/CommonSignout.vue'

@Component({
  name: 'MoleculesSidebarsCommonSidebar',
  components: {
    CommonTile,
    IconButton,
    CommonSignout
  }
})
export default class MoleculesSidebarsCommonSidebar extends Vue {}
</script>

<style lang="scss" scoped>
#sidebar {
  background-color: $primary;
  height: 100%;
  width: 200px;
  max-width: 200px;
  position: fixed;
  overflow-x: hidden;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 15px 15px 50px 15px;
  @include mq(xsmall) {
    display: none;
  }
  @include mq(medium) {
    display: block;
  }
}
.siderbar-wrap {
  position: relative;
  height: 100%;
  .signout {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.sidebar {
  list-style: none;
  margin: 0;
  padding: 0;

  &_item {
    color: #fff;
    margin-bottom: 10px;
  }
  .link {
    text-decoration: none;
    display: block;
    &:hover {
      opacity: 0.6;
    }
  }
  &_link {
    width: 100%;
  }
  .nuxt-link-exact-active {
    .sidebar_link {
      background-color: lighten($primary, 20%);
    }
  }
}
</style>
