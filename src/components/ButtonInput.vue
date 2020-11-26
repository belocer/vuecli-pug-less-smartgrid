<template lang="pug">
    button(
    :type="type",
    name="button",
    @click.prevent="showCsl"
    ).inp-btn {{ title }}
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      title: {
        type: String,
        default: 'Кнопка'
      },
      type: {
        type: String,
        default: 'button'
      },
    },
    data() {
      return {
        str: {
          technology: 'Vuexxx'
        }
      }
    },
    methods: {
      ...mapMutations(['csl']),
      showCsl(e) {
        this.csl({...this.str})
      }
    }
  }
</script>

<style scoped lang="less">
    @import './../assets/smart-grid.less';

    button.inp-btn {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 0;
        text-indent: 10px;
        display: inline-block;
        border-radius: 3px;
        color: #fff;
        border: none;
        outline: none;
        background: #5ccf3e;
        transition: background .3s;

        &:hover {
            background: #55b437;
            transition: background .3s;
        }
    }

</style>