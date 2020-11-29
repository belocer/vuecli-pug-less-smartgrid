<template lang="pug">
    .info
        h3.info__title {{ title }}
        p.info__text {{ text }}
        code.info__code {{ codeText }}
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      codeText: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
      }
    },
    methods: {
    },
    mounted() {
    },
    computed: {

    }
  }
</script>

<style lang="less" scoped>
    @import './../assets/smart-grid.less';

    .info {
        box-sizing: border-box;
        padding: 5px 20px;
        border: 1px solid #afafaf;
        border-radius: 3px;
        background: #fff;
        position: relative;
        z-index: 2;
        .col();
        .size(12);

        .info__title {
            pointer-events: auto;
            color: #273849;
            margin: 20px 0;
            line-height: 1.2;
            position: relative;

            &:before {
                content: "#";
                color: #42b983;
                position: absolute;
                left: -0.7em;
                margin-top: -0.05em;
                padding-right: 0.5em;
                font-size: 1.2em;
                line-height: 1;
                font-weight: bold;
            }
        }

        .info__text {
            line-height: 1.6rem;
            padding: 20px 0;
            position: relative;
            z-index: 1;
        }

        .info__code {
            font-family: "Roboto Mono", Monaco, courier, monospace;
            font-size: 0.85em;
            background-color: #f8f8f8;
            -webkit-font-smoothing: initial;
            overflow-x: auto;
            color: #525252;
            white-space: pre;
            padding: 1.2em 1.4em;
            font-size: 0.85rem;
            line-height: 1.6rem;
            display: block;
        }
    }
</style>