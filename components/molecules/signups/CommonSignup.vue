<template>
  <form class="signup" @submit.prevent="singup">
    <InputForm
      v-model="name"
      type="text"
      class="signup__input"
      placeholder="Name"
    />
    <InputForm
      v-model="userId"
      type="text"
      class="signup__input"
      placeholder="User ID"
    />
    <InputForm
      v-model="profession"
      type="text"
      class="signup__input"
      placeholder="Profession"
    />
    <InputForm
      v-model="email"
      type="email"
      class="signup__input"
      placeholder="Email address"
    />
    <InputForm
      v-model="password"
      type="password"
      class="signup__input"
      placeholder="Password"
    />
    <RoundButton type="red-gradient" class="signup__button">
      <font-awesome-icon icon="arrow-right" />
    </RoundButton>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputForm from '../../atoms/forms/InputForm.vue'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'MoleculesSignupsCommonSignup',
  components: {
    InputForm,
    RoundButton
  }
})
export default class MoleculesSignupsCommonSignup extends Vue {
  private name = ''
  private userId = ''
  private profession = ''
  private email = ''
  private password = ''

  private singup() {
    this.$nuxt.$loading.start()
    console.log('Name: %s', this.name)
    console.log('User ID: %s', this.userId)
    console.log('Profession: %s', this.profession)
    console.log('Email: %s', this.email)
    console.log('Password: %s', this.password)
    this.$nuxt.$loading.finish()
    this.$router.replace('/')
  }
}
</script>

<style lang="scss" scoped>
.signup {
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
  &__button {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
