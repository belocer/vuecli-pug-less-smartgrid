<template lang="pug">
    .wrap
        h1.header1 1 adaptive block
        h2.header2 2 adaptive block
        h3.header3 3 adaptive block
        .wrap-form
            form-auth
</template>

<script>
  import FormAuth from './FormAuth.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      FormAuth
    },
    mounted() {
      console.log('%c Старший разработчик проекта: Белоцерковец Денис Викторович | Email: belocerkovecden@gmail.com', 'background: #38444c; color: #EFF1F2; padding: 30px 40px;');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import './../assets/smart-grid.less';

    html, body {
        .reset();
        font-size: 16px;
    }

    .wrap {
        .row-flex();
        justify-content: space-between;
        position: relative;
    }

    h1, h2, h3 {
        font-weight: normal;
        color: #42b983;
        display: flex;
        justify-content: center;
        align-items: center;
        .lg(color, rgba(79, 234, 167, 0.45));
        .md(color, rgba(0, 0, 0, 0.49));
        .sm(color, #b9b82c);
        .xs(color, #ac42b9);
    }

    .header1 {
        margin-top: 30px;
        height: 100px;
        background: #a061a8;
        font-size: 2rem;
        .col();
        .size(4);
        .size-lg(6);
        .size-md(12);
    }

    .header2 {
        margin-top: 30px;
        height: 100px;
        background: #1d8fbc;
        font-size: 2rem;
        .col();
        .size(4);
        .size-lg(6);
        .size-md(12);
    }

    .header3 {
        margin-top: 30px;
        height: 100px;
        background: #b24842;
        font-size: 2rem;
        .col();
        .size(4);
        .size-lg(12);
        .size-md(12);
    }

    .wrap-form {
        margin-top: 60px;
        width: 100%;
    }
</style>
