<template lang="pug">
    .main

        h1.main-header Упражнение № {{ $route.params.exercise }}
        h2.second-header
            span.second-header__title тема: "{{ dataT[getExercise].mainTitle }}"

        .content
            .wrap-progress-linear
                v-progress-linear(v-model="valueDeterminateC" height="10")

            .wrapInfoBlock
                InfoBlock(
                :title="dataT[$route.params.exercise - 1].title",
                :text="dataT[$route.params.exercise - 1].text",
                :codeText="dataT[$route.params.exercise - 1].code"
                )

            codemirror(
            ref="myCm",
            :value="codes",
            :options="cmOptions",
            @input="onCmCodeChange"
            )#myTextArea

            #panel-html(v-html="resultCode")

            .wrap-btn
                v-btn(
                block
                large
                depressed
                :disabled="btnNext",
                @click="showNext()"
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
        codes: '',
        cmOptions: {
          tabSize: 2,
          mode: 'text/x-vue',
          lineNumbers: true,
          theme: 'base16-dark',
          line: true,
        },
        valueDeterminate: 100,
        dataT: null,
        idTraining: 0,
        btnNext: true
      }
    },
    methods: {
      ...mapGetters(['getDataTraining']),
      ...mapMutations(['thisExercisePlus']),
      visibleHTML() {
        this.resultCode = this.codemirror.getValue('')
      },
      showNext() {
        this.$router.push({name: 'Training', params: {exercise: this.exercis}})
        document.location.reload();
      },
      onCmCodeChange(newCode) {
        this.code = newCode
        this.resultCode = this.codemirror.getValue('')
        let newString = this.resultCode.split(' ').join('')
        newString = func_nbsp(newString, ' ')
        function func_nbsp (newString, del_symbol) {
          newString = newString.split(del_symbol).join('')
          if (newString.indexOf(del_symbol) > -1) {
            func_nbsp(newString, del_symbol)
          }
          return newString
        }

        newString = newString.split('\t').join('')
        newString = func_nbsp(newString, '\t')
        newString = newString.split('\n').join('')
        newString = func_nbsp(newString, '\n')

        let start_container = newString.indexOf('<span>')
        let stop_container = newString.indexOf('</span>')
        let container = newString.substring(start_container, stop_container + 7)
        container = container.split(':').join(': ')

        let start_func = newString.indexOf('{msg:');
        let stop_func = newString.indexOf('}<\/script>');
        let func = newString.substring(start_func, stop_func)
        let msg = eval(func.substring(0, func.length - 1))

        if (container.indexOf('{{msg}}') > -1) this.btnNext = false

        let re = `/${msg}/gi`;
        let newstr = container.replace(re, '{{msg}}');
        this.resultCode = newstr.split('{{msg}}').join(msg)
      },
      plusExercise(){
        this.thisExercisePlus()
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
      },
      exercis() {
        this.plusExercise()
        return this.exercise
      },
      valueDeterminateC() {
        return this.valueDeterminate - Math.ceil((100 / this.dataT.length) * this.$route.params.exercise)
      }
    },
    components: {
      codemirror,
      InfoBlock
    },
    created() {
      this.dataT = this.getDataTraining();
      this.codes = this.dataT[this.$route.params.exercise - 1].codeForExercise
      this.cmOptions.modev = this.dataT[this.$route.params.exercise - 1].mode
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
        padding: 5px 10px;
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
            background: #42b983 !important;
            color: #fff !important;
        }
    }
</style>