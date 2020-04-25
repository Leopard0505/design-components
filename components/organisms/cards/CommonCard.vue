<template>
  <div class="cards">
    <CommonCard @add="open" />
    <RoundImageCard v-for="data in datas" :key="data.id" v-bind="data" />

    <CommonModal v-if="modal" class="modal" @close="close">
      <p>モーダル</p>
      <div class="modal__buttons">
        <CommonButton class="modal__button" @click="close">
          閉じる
        </CommonButton>
        <CommonButton class="modal__button" type="red-gradient" @click="add">
          追加
        </CommonButton>
      </div>
    </CommonModal>

    <SuccessModal v-if="success" class="modal" @close="close">
      <p>Complete!</p>
      <CommonButton class="modal__button" type="red-gradient" @click="close">
        閉じる
      </CommonButton>
    </SuccessModal>
  </div>
</template>

<script>
import CommonCard from '../../molecules/cards/CommonCard.vue'
import RoundImageCard from '../../molecules/cards/RoundImageCard.vue'
import CommonModal from '../../molecules/modals/CommonModal.vue'
import CommonButton from '../../atoms/buttons/CommonButton.vue'
import SuccessModal from '../../molecules/modals/SuccessModal.vue'

export default {
  components: {
    CommonCard,
    RoundImageCard,
    CommonModal,
    CommonButton,
    SuccessModal
  },
  data() {
    return {
      modal: false,
      success: false,
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
    open() {
      this.modal = true
    },
    complete() {
      this.success = true
    },
    close() {
      this.modal = false
      this.success = false
    },
    add() {
      this.datas.unshift({
        id: this.datas.length + 1,
        image: {
          src: '/images/atom.svg',
          alt: 'atom'
        },
        name1: 'atom',
        name2: 'icon'
      })
      this.close()
      this.complete()
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
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
  & + & {
    margin-left: 10px;
  }
}
.modal {
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
  &__button {
    width: 150px;
    height: 30px;
    border-radius: 30px;
    &:hover {
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
    }
  }
}
</style>
