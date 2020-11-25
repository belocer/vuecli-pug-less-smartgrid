<template>
    <div id="app">
        <div class="debug">
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <router-view/>
        </div>
    </div>
</template>

<script>
  // import './assets/smart-grid.less'

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
        .debug(rgba(60, 58, 78, 0.18), 1px solid rgba(0, 23, 147, 0.4));
    }

    html, body {
        .reset();
        color: #fff;
        font-size: 16px;
        background: #e9e9e9;
    }

    .wrapper {
        .wrapper()
    }
</style>
