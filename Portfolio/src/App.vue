<template>
    <div id="app">
    <router-view></router-view>
    </div>
    </template>
    
    <script>
    import { RouterLink, RouterView } from 'vue-router'
    import HomeView from './views/HomeView.vue'
    
    export default {
        name: 'App',
        components: {
            HomeView,
        }
    }
    </script>
    
    <style>
    
    </style>