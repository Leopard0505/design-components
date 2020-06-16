<template>
  <form class="interactive-paycard-form" @submit.prevent="add">
    <InputForm
      v-model="$attrs.cardNumber"
      type="text"
      class="interactive-paycard-form__input"
      placeholder="Card Number"
      @input="$emit('update:cardNumber', cardNumber)"
    />
    <InputForm
      v-model="$attrs.cardName"
      type="text"
      class="interactive-paycard-form__input"
      placeholder="Card Name"
      @input="$emit('update:cardName', $event.target.value)"
    />
    <InputForm
      v-model="$attrs.cardYear"
      type="text"
      class="interactive-paycard-form__input"
      placeholder="Card Year"
      @input="$emit('update:cardYear', $event.target.value)"
    />
    <InputForm
      v-model="$attrs.cardMonth"
      type="text"
      class="interactive-paycard-form__input"
      placeholder="Card Month"
      @input="$emit('update:cardMonth', $event.target.value)"
    />
    <InputForm
      v-model="$attrs.cardCvv"
      type="text"
      class="interactive-paycard-form__input"
      placeholder="Card CVV"
      @input="$emit('update:cardCvv', $event.target.value)"
    />
    <RoundButton type="red-gradient" class="interactive-paycard-form__button">
      <font-awesome-icon icon="arrow-right" />
    </RoundButton>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputForm from '../../atoms/forms/InputForm.vue'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'OrganismsFormsInteractivePaycardForm',
  components: {
    InputForm,
    RoundButton
  }
})
export default class OrganismsFormsInteractivePaycardForm extends Vue {
  private cardNumber = ''
  private cardName = ''
  private cardYear = ''
  private cardMonth = ''
  private cardCvv = ''

  private add() {
    console.log('add')
  }
}
</script>

<style lang="scss" scoped>
.interactive-paycard-form {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  padding: 50px 30px;
  background: lighten($color: $primary, $amount: 5%);
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  @include mq(xsmall) {
    width: 90%;
    margin: auto;
  }
  @include mq(medium) {
    width: 500px;
    margin: 0;
  }
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
