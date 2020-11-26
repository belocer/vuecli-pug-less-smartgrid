<template lang="pug">
    #app
        .debug
            div
                div
                    - for (let i = 0; i < 12; i++)
                        div

        .burger(v-if="!nav", @click="showMenu")
        .nav(v-if="nav")
            .nav-head
                h2.nav-head__text Menu
                span(@click="showMenu").nav-head__icon &times;

            ul.nav-list
                li.nav-list__item
                    router-link(
                    tag="a"
                    exact
                    :to="'/'"
                    active-class="active"
                    ).nav-list__link main

                li.nav-list__item
                    router-link(
                    tag="a"
                    exact
                    :to="'/country'"
                    active-class="active"
                    ).nav-list__link country

        .wrapper
            router-view
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        nav: true
      }
    },
    methods: {
      showMenu(e) {
        this.nav = !this.nav
      }
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

    .nav {
        background: #aaa;
        width: 300px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;

        .nav-head {
            background: #999;
            padding: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .nav-head__text {
                font-size: 2rem;
                color: #fff;
                display: inline-block;
                text-transform: uppercase;
            }

            .nav-head__icon {
                font-size: 2rem;
                color: #fff;
                display: inline-block;
                position: relative;
                z-index: 2;
                transition: transform .3s;

                &:hover {
                    transform: rotate(360deg);
                    transition: transform .3s;
                    cursor: pointer;
                }
            }
        }
    }

    .nav-list {
        padding: 30px;

        .nav-list__item {
            margin-bottom: 20px;
            position: relative;
            z-index: 2;

            &:last-child {
                margin-bottom: 0;
            }

        }
    }

    .nav-list__link {
        border-bottom: 2px solid transparent;
        transition: border-bottom .2s;
        font-size: 1rem;
        text-transform: capitalize;
        color: #fff;
        text-decoration: none;

        &:hover {
            border-bottom: 2px solid #fff;
            transition: border-bottom .2s;
            cursor: pointer;
        }

        .active {
            border-bottom: 2px solid #fff;
        }
    }

    .burger {
        position: fixed;
        top: 30px;
        left: 30px;
        width: 40px;
        height: 40px;
        z-index: 101;
        background: #fff;
        border: 1px solid #4f697e;
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
            width: 30px;
            height: 2px;
            background: #4f697e;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 2px;
            background: #4f697e;
            margin-bottom: 5px;
        }
    }
</style>
