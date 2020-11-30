<template lang="pug">
    #app
        <!--.debug-->
            <!--div-->
                <!--div-->
                    <!-- - for (let i = 0; i < 12; i++)-->
                        <!--div-->

        .burger(v-if="!nav", @click="showMenus")

        .wrapper
            router-view

        nav-menu(v-if="nav")

</template>

<script>
    import navMenu from './components/Navigation'
    import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations(['showMenu']),
      showMenus() {
        this.showMenu()
      }
    },
    computed: {
      ...mapState(['nav']),
      statenav() {
        return this.nav
      }
    },
    components: {
      navMenu
    }
  }
</script>

<style lang="less">
    @import './assets/smart-grid.less';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .debug {
        z-index: 0;
        .debug(rgba(60, 58, 78, 0.18), 1px solid rgb(48, 215, 255));
    }

    html, body {
        .reset();
        color: #fff;
        font-size: 16px;
        background: #e9e9e9;
    }

    .wrapper {
        .wrapper();
        overflow: hidden;
    }

    .burger {
        position: fixed;
        top: 10px;
        left: 20px;
        width: 40px;
        height: 40px;
        z-index: 101;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: .5;
        transition: opacity .3s;
        
        &:hover {
            cursor: pointer;
            opacity: 1;
            transition: opacity .3s;
        }

        &::after {
            content: '';
            display: inline-block;
            width: 25px;
            height: 1px;
            background: #4f697e;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 1px;
            background: #4f697e;
            margin-bottom: 6px;
        }
    }
</style>
