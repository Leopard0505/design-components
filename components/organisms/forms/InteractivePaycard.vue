<template>
  <div class="interactive-paycard">
    <card-visual :labels="labels" :fields="fields" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VueInteractivePaycard from 'vue-interactive-paycard'
Object.keys(VueInteractivePaycard).forEach((name) => {
  Vue.component(name, VueInteractivePaycard[name])
})

@Component({
  name: 'OrganismsFormsInteractivePaycard'
})
export default class OrganismsFormsInteractivePaycard extends Vue {
  private labels = {
    cardNumber: '',
    cardName: '',
    cardYear: '',
    cardMonth: '',
    cardCvv: ''
  }

  private fields = {
    cardNumber: '',
    cardName: '',
    cardYear: '',
    cardMonth: '',
    cardCvv: ''
  }
}
</script>

<style lang="scss">
@import 'vue-interactive-paycard/src/assets/style.scss';
.interactive-paycard {
}
</style>
