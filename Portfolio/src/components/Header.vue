<script>
    export default {
        name: 'Header',
        mounted(){
            //Permet au clic de l'image, de remonter en haut de la page
            const myPic = document.getElementById('myPic');
            myPic.addEventListener('click', () =>{
                window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
                });
            });
        }
    };
</script>

<template>
    <header>
        <img id="myPic" src="../assets/image/IMG_3110.jpg" alt="Photo en noir et blanc d'un garçon souriant">

        <nav id="Accueil">
            <h2><router-link to="/">Accueil</router-link></h2>
        </nav>

        <nav id="nav-menu">
            <ul>
                <li class="nav navBorder"><a href="#presentation">Ma présentation</a></li>
                <li class="nav navBorder"><a href="#creations">Mes créations</a></li>
                <li class="nav"><a href="#form">Me contacter</a></li>
            </ul>
        </nav>
      
    </header>
    
</template>

<style>

    #Accueil{
        color: orange;
    }

    header{
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding: 10px;
        background-color: black;
        padding-top: 50px;
        padding-bottom: 50px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-image: radial-gradient(orange, rgba(0, 0, 0, 0)) 50;
    }

    #myPic {
        width:100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100px;
        position: fixed;
        margin-left: 20px;
        border: 5px solid rgb(41, 41, 41);
        box-shadow: 0 0 20px orange;
    }

    #myPic:hover{
        cursor: pointer;
        }

   

    #nav-menu {
        display: flex;
        align-items: end;
        background-color: orange;
        margin-left: 65%;
        border-radius: 10px;
        }

    ul{
        display: flex;
        list-style: none;
        }

    .nav {
        margin-right: 40px;
        }

    .navBorder{
        border-right: 2px solid black;
        padding-right: 40px;
        }

    a{
        text-decoration: none;
        color: black;
        font-weight: 600;
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

            #Accueil{
                color: orange !important;
            }
            
        }
    }
</style>