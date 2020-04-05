<template>
  <transition>
    <aside id="sidebar">
      <div style="width: 100%; height: 50px;"></div>
      <ul class="sidebar">
        <li class="sidebar_item">
          <nuxt-link class="link" to="/">
            <IconButton class="sidebar_link" icon="home">
              Home
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
    </aside>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IconButton from '../../atoms/buttons/IconButton.vue'

@Component({
  name: 'MoleculesSidebarsCommonSidebar',
  components: {
    IconButton
  }
})
export default class MoleculesSidebarsCommonSidebar extends Vue {}
</script>

<style lang="scss" scoped>
#sidebar {
  background-color: #1d65f1;
  height: 100%;
  width: 200px;
  max-width: 200px;
  position: fixed;
  overflow-x: hidden;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 15px;
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
  .nuxt-link-active {
    .sidebar_link {
      background-color: lighten(#1d65f1, 20%);
    }
  }
}
</style>
