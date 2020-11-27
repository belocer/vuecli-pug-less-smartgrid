<template lang="pug">
    .nav
        .nav-head
            h2.nav-head__text Menu
            span(@click="closeMenus").nav-head__icon &times;

        ul.nav-list
            li.nav-list__item
                router-link(
                tag="a"
                exact
                :to="{name: 'Main'}"
                active-class="active"
                ).nav-list__link main

            li.nav-list__item
                router-link(
                tag="a"
                exact
                :to="{name: 'Country'}"
                active-class="active"
                ).nav-list__link country

            li.nav-list__item
                router-link(
                tag="a"
                exact
                :to="{name: 'Cart', params: {qty: qty}}"
                active-class="active"
                ).nav-list__link cart {{ qty }}
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

  export default {
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations(['showMenu', 'closeMenu']),
      showMenus() {
        this.showMenu()
        //this.closeNav()
      },
      closeMenus() {
        this.closeMenu()
      }
    },
    mounted() {
    },
    computed: {
      ...mapState(['countCart']),
      qty() {
        return this.countCart
      },
    }
  }
</script>

<style lang="less">
    @import './../assets/smart-grid.less';

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
    }

    .active {
        border-bottom: 2px solid #fff;
    }
</style>