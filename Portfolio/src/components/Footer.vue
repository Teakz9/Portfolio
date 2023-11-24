<script>
    
    export default {
        mounted(){
            const lastUpdateDate = document.getElementById('last-update-date');
            const currentDate = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric'};
            lastUpdateDate.textContent = currentDate.toLocaleDateString('fr-FR', options);

        }
    }

</script>

<template>
 
 <footer>
      <div class="smLink">

        <a href="https://github.com/Teakz9" target="_blank" ><img src="../assets/image/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png" alt="Logo GitHUb blanc" class="smLogo smLogo-margin"></a>
        <a href="https://www.linkedin.com/in/yann-breton-73648019b/" target="_blank" ><img src="../assets/image/clipart1156929.png" alt="Logo LinkedIn blanc" class="smLogo smLogo-margin"></a>
        <a href="https://www.reddit.com/user/Teakz9" target="_blank" ><img src="../assets/image/pngfind.com-reddit-logo-png-426343.png" alt="Logo LinkedIn blanc" class="smLogo"></a>

      </div>

        <p class="date">Dernière mise à jour : <span id="last-update-date">13 octobre 2023</span></p>

      
    </footer>

</template>

<style scoped>

    footer{
        margin-top: 100px;
        background-color: black;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top-style: solid;
        border-top-width: 1px;
        border-image: radial-gradient(orange, rgba(0, 0, 0, 0)) 50;
    }

    .smLink{
        display: flex;
        justify-content: center;
    }

    .smLogo-margin{
        margin-right: 15px;
    }

    .smLogo{
        width: 50px;
        height: 50px;
    }

    .date{
        display: flex;
        justify-content: center;
    }

</style>