<template lang="pug">
    form.form-auth
        input(type="text" name="login" placeholder="Login").inp
        input(type="email" name="email" placeholder="E-mail").inp
        input(type="password" name="password" placeholder="Password").inp
        button-input(
        type="submit"
        title="Отправить"
        )
</template>

<script>
  import ButtonInput from './ButtonInput.vue';
  export default {

    data() {
      return {}
    },

    components: {
      ButtonInput
    }
  }
</script>

<style scoped lang="less">
    @import './../assets/smart-grid.less';

    .form-auth {
        max-width: 500px;
        margin: 0 auto;
        display: block;
        position: relative;
        z-index: 1;
        .col();
        .size(4);
        .shift-left(4);

        .inp {
            box-sizing: border-box;
            width: 100%;
            padding: 10px 0;
            text-indent: 10px;
            display: inline-block;
            margin-bottom: 20px;
            border: none;
            outline: none;
            border-bottom: 2px solid #1d8fbc;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>