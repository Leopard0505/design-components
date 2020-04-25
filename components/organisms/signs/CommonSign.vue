<template>
  <div class="sign">
    <div class="sign__tab">
      <span
        class="sign__tab-text"
        :class="{ active: formLogin }"
        @click="change(1)"
      >
        Log in
      </span>
      <span
        class="sign__tab-text"
        :class="{ active: formSignup }"
        @click="change(2)"
      >
        Sign up
      </span>
    </div>

    <CommonLogin v-if="formLogin" />
    <CommonSignup v-else-if="formSignup" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CommonLogin from '../../molecules/logins/CommonLogin.vue'
import CommonSignup from '../../molecules/signups/CommonSignup.vue'

@Component({
  name: 'OrganismsSignsCommonSign',
  components: {
    CommonLogin,
    CommonSignup
  }
})
export default class OrganismsSignsCommonSign extends Vue {
  private mode = 1

  get formLogin() {
    return this.mode === 1
  }

  get formSignup() {
    return this.mode === 2
  }

  private change(mode: number) {
    this.mode = mode
  }
}
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
