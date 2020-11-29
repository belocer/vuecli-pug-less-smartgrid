<template lang="pug">
    .main

        h1.main-header Упражнение № {{ idTraining }}
        h2.second-header
            span.second-header__title тема: "{{ dataT[getExercise].mainTitle }}"

        .content
            .wrap-progress-linear
                v-progress-linear(v-model="valueDeterminate" height="10")

            .wrapInfoBlock
                InfoBlock(
                :title="dataT[getExercise].title",
                :text="dataT[getExercise].text",
                :codeText="dataT[getExercise].code"
                )

            codemirror(
            ref="myCm",
            :value="code",
            :options="cmOptions",
            @ready="onCmReady",
            @focus="onCmFocus",
            @input="onCmCodeChange"
            )#myTextArea

            #panel-html(v-model="resultCode")

            .wrap-btn
                v-btn(
                block
                elevation="16"
                large
                x-large
                ) Следующее упражнение
</template>

<script>
  import InfoBlock from './InfoBlock'
  import { codemirror } from 'vue-codemirror'
  import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

  import 'codemirror/mode/vue/vue.js'

  export default {
    data () {
      return {
        resultCode: '',
        code: '',
        cmOptions: {
          tabSize: 2,
          mode: 'text/x-vue',
          lineNumbers: true,
          theme: 'base16-dark',
          line: true,
        },
        valueDeterminate: 66,
        dataT: null,
        idTraining: 0,
      }
    },
    methods: {
      ...mapGetters(['getDataTraining']),
      visibleHTML() {
        this.resultCode = this.codemirror.getValue('')
      },
      onCmReady(cm) {
        console.log('the editor is readied!', cm)
      },
      onCmFocus(cm) {
        console.log('the editor is focus!', cm)
      },
      onCmCodeChange(newCode) {
        this.code = newCode
        this.resultCode = this.codemirror.getValue('')
        this.visibleHTML()
      }
    },
    computed: {
      ...mapState(['exercise']),
      getExercise(state) {
        this.idTraining = parseInt(state.exercise)
        return parseInt(state.exercise - 1)
      },
      codemirror() {
        return this.$refs.myCm.codemirror
      }
    },
    components: {
      codemirror,
      InfoBlock
    },
    created() {
      this.dataT = this.getDataTraining();
      this.code = this.dataT[this.getExercise].codeForExercise
      this.cmOptions.modev = this.dataT[this.getExercise].mode
    }
  }
</script>

<style lang="less">
    @import './../assets/smart-grid.less';
    @import 'codemirror/theme/base16-dark.css';
    @import 'codemirror/lib/codemirror.css';
    @import 'vuetify/dist/vuetify.min.css';

    .main {
        margin-top: 50px;
    }

    .content {
        justify-content: space-between;
        flex-wrap: wrap;
        .row-flex();
    }

    .vue-codemirror {
        background: #fff;
        position: relative;
        z-index: 2;
        border: 1px solid #afafaf;
        border-radius: 3px;
        .col();
        .size(6);
    }

    .wrap-progress-linear {
        position: relative;
        z-index: 10;
        margin-top: 20px;
        margin-bottom: 10px;
        background: rgba(66, 185, 131, 0.48);
        .col();
        .size(12);
    }

    h1.main-header {
        white-space: nowrap;
        text-transform: uppercase;
        font-weight: 700;
        color: #6f809a;
        text-decoration: none;
        display: block;
        text-align: left;
        width: 100%;
        font-size: 2rem;
    }

    h2.second-header {
        padding-top: 10px;

        .second-header__title {
            white-space: nowrap;
            font-weight: 500;
            color: #6f809a;
            text-decoration: none;
            display: block;
            text-align: left;
            width: 100%;
            font-size: 1.5rem;
        }
    }

    .wrapInfoBlock {
        margin-bottom: 20px;
    }

    #panel-html {
        position: relative;
        z-index: 2;
        background: #fff;
        border: 1px solid #afafaf;
        border-radius: 3px;
        outline: none;
        .col();
        .size(6);

        #html {
            width: 100%;
            height: 100%;
            color: #fff;
            border: 1px solid #afafaf;
            border-radius: 3px;
            outline: none;

        }
    }

    .v-progress-linear--reverse {
        background: transparent;
    }

    .v-progress-linear__background {
        background: #42b983;
        opacity: 1 !important;
    }

    .wrap-btn {
        margin-top: 20px;
        box-sizing: border-box;
        position: relative;
        z-index: 2;
        .col();
        .size(12);

        button {
            background: #42b983;
            color: #fff;
        }
    }
</style>