<template lang="pug">
    .wrap
        h1 Поиск по странам

        input(
        type="text",
        v-model="query",
        @input="search_country($event)"
        ).inp-query

        ul(v-if="foundCountries.length").list-country
            li(v-for="country in foundCountries").list-country__item
                span.list-country__name {{ country }}
                button(addCart).add-to-cart +


</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        AuthToken: "f03eaf67f130604830ff3da5dcb30b0123bc0225",
        countries: null,
        foundCountries: [],
        query: '',
      }
    },
    methods: {
      search_country(e) {
        if(e.target.value.length > 2) {
          let query_str = e.target.value.toUpperCase()
          this.foundCountries= this.countries.filter(elem => elem.toUpperCase().indexOf(query_str) > -1)
        }
      },
      addCart () {
        console.log(1);
      }
    },
    mounted() {
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/countries',
        headers: {
          'x-rapidapi-key': 'b15d457ba1msh398fca5dcb2c241p14bf77jsn081c1f2efd61',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
      }
      axios.request(options)
        .then(answer => {
          this.countries = answer.data.response
        })
        .catch(error => console.log(2, error))

      console.log('%c Старший разработчик проекта: Белоцерковец Денис Викторович | Email: belocerkovecden@gmail.com', 'background: #38444c; color: #EFF1F2; padding: 30px 40px;');
    }
  }
</script>

<style scoped lang="less">
    @import './../assets/smart-grid.less';

    h1 {
        margin-top: 50px;
        font-size: 2rem;
        text-align: center;
    }

    .inp-query {
        position: relative;
        z-index: 2;
        margin-top: 50px;
        text-align: center;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 0;
        text-indent: 10px;
        display: inline-block;
        border-radius: 3px;
        color: #2a2a2a;
        border: none;
        outline: none;

        .col();
        .size(6);
        .shift-left(3);
    }

    .list-country {
        margin-top: 50px;
        position: relative;
        z-index: 1;
        .row-flex();

        .list-country__item {
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid crimson;
            border-radius: 3px;
            background: rgba(159, 20, 42, 0.46);
            padding: 5px;
            transition: background .2s;
            .col();
            .size(2);

            &:hover {
                transition: background .2s;
                background: firebrick;
            }

            .list-country__name {
                color: #fff;
                margin-right: 10px;
            }
        }
    }

    .add-to-cart {
        background: #00a820;
        border-radius: 50%;
        color: #fff;
        width: 30px;
        height: 30px;
        transition: background, transform .2s;
        border: 2px solid #fff;
        outline: none;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        line-height: 24px;

        &:hover {
            transition: background, transform .2s;
            background: #008f21;
            transform: rotate(360deg);
            cursor: pointer;
        }
    }

</style>
