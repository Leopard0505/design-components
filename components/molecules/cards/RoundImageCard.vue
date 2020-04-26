<template>
  <div class="card" @click="edit">
    <span v-if="update" class="card__status" />
    <img :src="image.src" :alt="image.alt" class="card__image" />
    <p class="card__text">{{ name1 }}</p>
    <p class="card__text">{{ name2 }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'MoleculesCardsCommonCard',
  components: {
    RoundButton
  }
})
export default class MoleculesCardsCommonCard extends Vue {
  @Prop({ type: Number }) id!: number
  @Prop({ type: Object }) image!: object
  @Prop({ type: String }) name1!: string
  @Prop({ type: String }) name2!: string
  @Prop({ type: Boolean }) update!: boolean

  @Emit('edit')
  private edit() {
    return {
      id: this.id,
      image: this.image,
      name1: this.name1,
      name2: this.name2
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100px;
  min-width: 100px;
  padding: 15px;
  background: lighten($primary, 5%);
  border-radius: 5px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
  &__status {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    background: $red-gradient;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
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
