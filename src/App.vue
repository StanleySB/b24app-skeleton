<template>
    <div id="app">
        {{ user.a }}
    </div>
</template>

<script>
    import {test} from "./api/get-current-user";

    export default {
        name: 'App',
        data: () => ({
            user: {a: 'bbbasdf'}
        }),
        async mounted () {
            let r = test();

            console.log('r', r);
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
