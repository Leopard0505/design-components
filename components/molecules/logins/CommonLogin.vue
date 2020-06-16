<template>
  <form class="login" @submit.prevent="login">
    <InputForm
      v-model="username"
      type="text"
      class="login__input"
      placeholder="Username"
    />
    <InputForm
      v-model="password"
      type="password"
      class="login__input"
      placeholder="Password"
    />
    <nuxt-link to="/forget-password" class="login__forget-password">
      Forget Password?
    </nuxt-link>
    <RoundButton type="red-gradient" class="login__button">
      <font-awesome-icon icon="arrow-right" />
    </RoundButton>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputForm from '../../atoms/forms/InputForm.vue'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'MoleculesLoginsCommonLogin',
  components: {
    InputForm,
    RoundButton
  }
})
export default class MoleculesLoginsCommonLogin extends Vue {
  private username = ''
  private password = ''

  private login() {
    this.$nuxt.$loading.start()
    console.log('Username: %s', this.username)
    console.log('Password: %s', this.password)
    this.$nuxt.$loading.finish()
    this.$router.replace('/')
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  box-sizing: border-box;
  width: 500px;
  max-width: 100%;
  padding: 50px 30px;
  background: lighten($color: $primary, $amount: 5%);
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  &__input {
    height: 50px;
    padding: 0 25px;
    border-radius: 30px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  &__forget-password {
    padding-left: 20px;
    font-size: 0.8rem;
    color: lighten($color: $primary, $amount: 20%);
    text-decoration: none;
  }
  &__button {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
