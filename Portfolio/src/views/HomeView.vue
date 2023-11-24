<template data-view="home">
  <router-view></router-view>
  <Header />
  <Main />
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

  @media screen and (max-width: 390px) {
    
    header{
        display: flex;
        flex-direction: column;
        align-items: center;

            #myPic {
                width:80px;
                height: 80px;
                object-fit: cover;
                border-radius: 100px;
                position: fixed;
                margin-left: 20px;
                border: 5px solid rgb(41, 41, 41);
                box-shadow: 0 0 20px orange;
                margin-bottom: 20px;
                
            }
            #nav-menu {
                text-align: center;
                margin-top: 100px;
                width: 100%;
                height: 100%;
                margin-left: -10px;
                padding-right: 50px;
                font-size: 0.8em;
            }
            ul{
                display: flex;
                justify-content: center;
            }
            
    }

    main{
        #creations{
            display: flex;
            flex-direction: column;
        }

        .form-row{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .form-group{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
  }

</style>

<script setup>
  import Header from '../components/Header.vue';
  import Main from '../components/Main.vue'
  import Footer from '../components/Footer.vue'
</script>
