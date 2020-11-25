<template lang="pug">
    input(
    type="button",
    name="button",
    slot="title",
    :value="title").inp-btn
</template>

<script>

  export default {
    props: {
      title: {
        type: String,
        default: 'Кнопка'
      },
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
    @import './../assets/smart-grid.less';

    .inp-btn {
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