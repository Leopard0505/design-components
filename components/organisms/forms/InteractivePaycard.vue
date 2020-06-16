<template>
  <div class="interactive-paycard">
    <card-visual
      :labels="labels"
      :fields="fields"
      class="interactive-paycard__paycard"
    />
    <InteractivePaycardForm v-bind.sync="fields" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VueInteractivePaycard from 'vue-interactive-paycard'
import InteractivePaycardForm from './InteractivePaycardForm.vue'
Object.keys(VueInteractivePaycard).forEach((name) => {
  Vue.component(name, VueInteractivePaycard[name])
})

@Component({
  name: 'OrganismsFormsInteractivePaycard',
  components: {
    InteractivePaycardForm
  }
})
export default class OrganismsFormsInteractivePaycard extends Vue {
  private labels = {
    cardNumber: '42## #### #### ##42',
    cardName: 'HYOGA KISHIKAWA',
    cardYear: '2022',
    cardMonth: '05',
    cardCvv: '123'
  }

  private fields = {
    cardNumber: '4242 4242 4242 4242',
    cardName: 'HYOGA KISHIKAWA',
    cardYear: '2022',
    cardMonth: '05',
    cardCvv: '123'
  }
}
</script>

<style lang="scss">
@import 'vue-interactive-paycard/src/assets/style.scss';
.interactive-paycard {
  &__paycard {
    @include mq(xsmall) {
      width: 100%;
    }
    @include mq(medium) {
      width: inherit;
    }
  }
}
</style>
