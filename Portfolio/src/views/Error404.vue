<template>
    <Header/>
    <div id="error">
        <h1>Error 404</h1>
        <h2>Oups ! Cette page n'est pas disponible</h2>
        <p><router-link to="/">Retour à l'accueil</router-link></p>
    </div>
    <Footer/>
</template>

<style>
    #error{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: orange;
    }

    h1{
        font-size: 8em;
    }
</style>