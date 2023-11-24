<script setup>

  import {useRouter} from 'vue-router';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue'

</script>

<template>
  <router-view/>
  <Header />
  <iframe src="/src/assets/image/cdc.pdf" type="application/pdf" frameborder="0" width="90%" height="1200"></iframe>
  <Footer />
</template>

<style>

  body{
    background-color: rgb(41, 41, 41);
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin: 0;
    padding: 0;
  }

  iframe{
    margin-top: 48px;
    padding-bottom: -96px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

</style>
