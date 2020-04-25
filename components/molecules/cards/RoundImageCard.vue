<template>
  <div class="card">
    <img :src="image.src" :alt="image.alt" class="card__image" />
    <p class="card__text">{{ name1 }}</p>
    <p class="card__text">{{ name2 }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'MoleculesCardsCommonCard',
  components: {
    RoundButton
  }
})
export default class MoleculesCardsCommonCard extends Vue {
  @Prop({ type: Object }) image!: object
  @Prop({ type: String }) name1!: string
  @Prop({ type: String }) name2!: string
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  display: inline-block;
  width: 100px;
  min-width: 100px;
  padding: 15px;
  background: lighten($primary, 5%);
  border-radius: 5px;
  text-align: center;
  &__image {
    display: block;
    width: 50px;
    height: 50px;
    margin: auto;
    margin-bottom: 10px;
  }
  &__text {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1;
  }
}
</style>
