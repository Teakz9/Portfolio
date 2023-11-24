<script>
    export default {
        name: 'Form',
        mounted(){
            //Fonctionnement du formulaire
            const formulaire = document.getElementById('myForm');
            const boutonSubmit = document.getElementById('boutonSubmit');
            
            formulaire.addEventListener('submit', (e) => {
                e.preventDefault();
                afficherMessage();
                reinitialiserChamps();
            });
            
            //Affichage d'un pop-up à l'envoi du formulaire
            function afficherMessage() {
                // Créer un élément de pop-up
                const popup = document.createElement('div');
                popup.className = 'popup';
                popup.innerHTML = 'Le formulaire a été soumis à l\'adresse mail : ybreton27@gmail.com';
            
                document.body.appendChild(popup);
            
                setTimeout(() => {
                popup.style.display = 'none';
                }, 3000);
            }

            function reinitialiserChamps(){
                formulaire.reset();
            }
        }
    };
</script>

<template>
    
    <section id="form">

<h2>Me contacter</h2>

<form action="#" method="post" id="myForm">

  <div class="form-row">
    <label for="Name">Nom :</label>
    <input name="Name" type="text" class="case space" required> 



    <label for="First-Name">Prénom :</label>
    <input name="First-Name" type="text" class="case" required> 
  </div>

  <div class="form-group">
    <label for="Object">Objet :</label>
    <input name="Object" type="text" class="case" required> 
  </div>

  <div class="form-group">
    <label for="Message">Message :</label>
    <textarea name="Message" class="case message" cols="30" rows="10" required></textarea> 
  </div>
  <button type="submit" id="boutonSubmit">Envoyer</button>
</form>

</section>

</template>

<style>
    .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px;
    background: black;
    border: 5px solid orange;
    border-radius: 15px;
    box-shadow: 0 0 20px red;
    z-index: 1000;
    text-align: center;
    color: orange;
    font-size: 2em;
    }

    #form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 200px;
    }

    .case{
        border-radius: 8px;
        border: 2px solid orange;
        background-color: rgba(0, 0, 0, 0.466);
        color: white;
    }

    .form-row{
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .space{
        margin-right: 10px;
    }

    button{
        color: white;
        background-color: black;
        border: 2px solid orange;
        border-radius: 30px;
        box-shadow: rgba(255, 68, 0, 0.315) 4px 4px 0 0;
        cursor: pointer;
        font-weight: 600;
        padding: 5px 18px;
    }

    @media screen and (max-width: 390px) {
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

</style>