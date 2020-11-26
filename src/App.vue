<template lang="pug">
    #app
        .debug
            div
                div
                    - for (let i = 0; i < 12; i++)
                        div

        .nav
            .nav-head
                h2.nav-head__text Menu
                span.nav-head__icon &times;

            ul.nav-list
                li.nav-list__item
                    router-link(tag="a" exact :to="'/'" active-class="active").nav-list__link main

                li.nav-list__item
                    router-link(tag="a" exact :to="'/country'" active-class="active").nav-list__link country

        .wrapper
            router-view
    </div>
</template>

<script>
  export default {
    name: 'App'
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
</style>
