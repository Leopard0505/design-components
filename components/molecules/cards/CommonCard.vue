<template>
  <div class="card">
    <RoundButton type="red-gradient" class="card__button" @click="add">
      <font-awesome-icon icon="plus" />
    </RoundButton>
    <p class="card__text">Add new</p>
    <p class="card__text">contact</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'
import RoundButton from '../../atoms/buttons/RoundButton.vue'

@Component({
  name: 'MoleculesCardsCommonCard',
  components: {
    RoundButton
  }
})
export default class MoleculesCardsCommonCard extends Vue {
  @Emit('add')
  private add() {
    return {}
  }
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
  &__button {
    margin-bottom: 10px;
  }
  &__text {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1;
  }
}
</style>
