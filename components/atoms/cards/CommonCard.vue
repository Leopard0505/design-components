<template>
  <transition>
    <div
      class="card"
      :class="`card__${type}`"
    >
      <div class="card_header">
        <span class="card_icon_box">
          <font-awesome-icon
            class="card_icon"
            :icon="icon"
          />
        </span>
        <div class="card_title_box">
          <span class="card_title">
            <slot name="title">17 hours</slot>
          </span>
          <span class="card_subtitle">
            <slot name="subtitle">Last recovery</slot>
          </span>
        </div>
      </div>
      <div class="card_body">
        <slot name="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsCardsCommonCard'
})
export default class AtomsCardsCommonCard extends Vue {
  @Prop({ type: String, default: 'primary' }) type: string
  @Prop({ type: String, default: 'clock' }) icon: string
}
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/_variables");
@import url("~/assets/scss/_mixins");

@mixin card($color: $primary) {
  .card_icon_box {
    background: rgba($color, 0.2);
  }
  .card_icon {
    color: $color;
  }
  .card_title {
    color: $color;
  }
  .card_subtitle {
    color: darken($color, 20%);
  }
}

.card {
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  padding: 25px;

  &_header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  &_icon_box {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $gray;
    display: inline-block;
  }
  &_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    display: inline-block;
  }

  &_title_box {
    margin-left: 10px;
  }
  &_title {
    display: block;
    font-size: 1rem;
    font-weight: bold;
  }
  &_subtitle {
    display: block;
    font-size: 0.8rem;
  }

  &_body {
    color: $gray;
  }


  &__primary {
    @include card($primary);
  }
  &__success {
    @include card($success);
  }
  &__danger {
    @include card($danger);
  }
}
</style>
