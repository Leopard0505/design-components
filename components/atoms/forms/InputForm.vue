<template>
  <input
    v-model="$attrs.value"
    class="input"
    :type="type"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'AtomsFormsInputForm'
})
export default class AtomsFormsInputForm extends Vue {
  @Prop({ type: String, default: 'text' }) type!: string
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 30px;
  padding: 0 15px;
  border: solid 0px #cfd8dc;
  border-radius: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
}
</style>
