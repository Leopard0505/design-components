<template>
  <div class="wrap">
    <CommonCard @add="add" />
    <RoundImageCard v-for="data in datas" :key="data.id" v-bind="data" />

    <CommonModal v-if="modal" @close="close">
      <p>モーダル</p>
    </CommonModal>
  </div>
</template>

<script>
import CommonCard from '../../molecules/cards/CommonCard.vue'
import RoundImageCard from '../../molecules/cards/RoundImageCard.vue'
import CommonModal from '../../molecules/modals/CommonModal.vue'

export default {
  components: {
    CommonCard,
    RoundImageCard,
    CommonModal
  },
  data() {
    return {
      modal: false,
      datas: [
        {
          id: 1,
          image: {
            src: '/images/atom.svg',
            alt: 'atom'
          },
          name1: 'atom',
          name2: 'icon'
        },
        {
          id: 2,
          image: {
            src: '/images/auth0.svg',
            alt: 'auth0'
          },
          name1: 'auth0',
          name2: 'icon'
        },
        {
          id: 3,
          image: {
            src: '/images/babel.svg',
            alt: 'babel'
          },
          name1: 'babel',
          name2: 'icon'
        },
        {
          id: 4,
          image: {
            src: '/images/branch.svg',
            alt: 'branch'
          },
          name1: 'branch',
          name2: 'icon'
        },
        {
          id: 5,
          image: {
            src: '/images/broccoli.svg',
            alt: 'broccoli'
          },
          name1: 'broccoli',
          name2: 'icon'
        },
        {
          id: 6,
          image: {
            src: '/images/c-plusplus.svg',
            alt: 'c++'
          },
          name1: 'c++',
          name2: 'icon'
        },
        {
          id: 7,
          image: {
            src: '/images/c-sharp.svg',
            alt: 'c#'
          },
          name1: 'c#',
          name2: 'icon'
        },
        {
          id: 8,
          image: {
            src: '/images/c.svg',
            alt: 'c'
          },
          name1: 'c',
          name2: 'icon'
        },
        {
          id: 9,
          image: {
            src: '/images/caffe2.svg',
            alt: 'caffe2'
          },
          name1: 'caffe2',
          name2: 'icon'
        },
        {
          id: 10,
          image: {
            src: '/images/circleci.svg',
            alt: 'circleci'
          },
          name1: 'circleci',
          name2: 'icon'
        },
        {
          id: 11,
          image: {
            src: '/images/css-3.svg',
            alt: 'css3'
          },
          name1: 'css3',
          name2: 'icon'
        },
        {
          id: 12,
          image: {
            src: '/images/dart.svg',
            alt: 'dart'
          },
          name1: 'dart',
          name2: 'icon'
        }
      ]
    }
  },
  methods: {
    add() {
      this.modal = true
    },
    close() {
      this.modal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
}
.card {
  flex: 1;
  & + & {
    margin-left: 10px;
  }
}
</style>
