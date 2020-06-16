<template>
  <div class="sign">
    <div class="sign__tab">
      <nuxt-link class="sign__tab-text active" to="/signin">
        Sign in
      </nuxt-link>
      <nuxt-link class="sign__tab-text" to="/signup">
        Sign up
      </nuxt-link>
    </div>

    <CommonLogin />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CommonLogin from '../../molecules/logins/CommonLogin.vue'

@Component({
  name: 'OrganismsSignsCommonSignin',
  components: {
    CommonLogin
  }
})
export default class OrganismsSignsCommonSignin extends Vue {}
</script>

<style lang="scss" scoped>
.sign {
  margin-top: 50px;
  width: 500px;
  max-width: 100%;
  &__tab {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    margin-bottom: 30px;
    &-text {
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: bold;
      color: darken($primary, 13%);
      &.active {
        color: #fff;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
