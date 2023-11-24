<script>
import { RouterLink } from 'vue-router';

    
    export default {
    name: 'Creation',
    mounted() {
        const specificationModal = document.getElementById('specificationModal');
        const toggleSpecificationModalBtn = document.getElementById('toggleSpecificationModalBtn');
        function openSpecificationModal() {
            specificationModal.style.display = 'block';
            toggleSpecificationModalBtn.textContent = 'Fermer le cahier des charges';
        }
        function closeSpecificationModal() {
            specificationModal.style.display = 'none';
            toggleSpecificationModalBtn.textContent = 'Voir le cahier des charges';
        }
        function toggleSpecificationModal() {
            if (specificationModal.style.display === 'block') {
                closeSpecificationModal();
            }
            else {
                openSpecificationModal();
            }
        }
        toggleSpecificationModalBtn.addEventListener('click', toggleSpecificationModal);
        window.addEventListener('click', (event) => {
            if (event.target === specificationModal) {
                closeSpecificationModal();
            }
        });
        window.addEventListener('click', (event) => {
            if (event.target !== specificationModal && event.target !== toggleSpecificationModalBtn) {
                closeSpecificationModal();
            }
        });
        //Modal du CV
        const cvModal = document.getElementById('cvModal');
        const toggleCvModalBtn = document.getElementById('toggleCvModalBtn');
        function openCvModal() {
            cvModal.style.display = 'block';
            toggleCvModalBtn.textContent = 'Fermer le Curriculum Vitae';
        }
        function closeCvModal() {
            cvModal.style.display = 'none';
            toggleCvModalBtn.textContent = 'Voir le Curriculum Vitae';
        }
        function toggleCvModal() {
            if (cvModal.style.display === 'block') {
                closeCvModal();
            }
            else {
                openCvModal();
            }
        }
        toggleCvModalBtn.addEventListener('click', toggleCvModal);
        window.addEventListener('click', (event) => {
            if (event.target === cvModal) {
                closeCvModal();
            }
        });
        if (cvModal.classList.contains('hidden')) {
            closeCvModal(); // Ferme le deuxième modal par défaut
        }
        else {
            openCvModal(); // Ouvre le deuxième modal par défaut
        }
        window.addEventListener('click', (event) => {
            if (event.target !== cvModal && event.target !== toggleCvModalBtn) {
                closeCvModal();
            }
        });
        //Modal de l'espace commentaire dynamique
        const comModal = document.getElementById('comModal');
        const toggleComModalBtn = document.getElementById('toggleComModalBtn');
        function openComModal() {
            comModal.style.display = 'block';
            toggleComModalBtn.textContent = "Fermer l'espace commentaire";
        }
        function closeComModal() {
            comModal.style.display = 'none';
            toggleComModalBtn.textContent = "Voir l'espace commentaire";
        }
        function toggleComModal() {
            if (comModal.style.display === 'block') {
                closeComModal();
            }
            else {
                openComModal();
            }
        }
        toggleComModalBtn.addEventListener('click', toggleComModal);
        window.addEventListener('click', (event) => {
            if (event.target === comModal) {
                closeComModal();
            }
        });
        if (comModal.classList.contains('hidden')) {
            closeComModal();
        }
        else {
            openComModal();
        }
        window.addEventListener('click', (event) => {
            if (event.target !== comModal && event.target !== toggleComModalBtn) {
                closeComModal();
            }
        });
    },
    components: { RouterLink }
};
    
</script>

<template>
    
    <h2>Mes créations</h2>

    <section id="creations">

        <section id="specification" class="creation">

            <div >
                <h3>Le Cahier des charges</h3>

                <img class="screen" src="../assets/image/cdc.png" alt="Capture d'écran d'une couverture de cahier des charges">
            </div>
  

            <div id="specificationModal" class="modal">
                <div class="modal-content">

                    <h4>"Le Cahier des charges"</h4>
                    <p>Ce document a été créer le 07 septembre 2023.</p>
                    <p>Sur ce projet, j'ai utilisé le logiciel Word pour la création du fichier, ensuite j'ai utilisé le site Convert.io pour convertir le document Word en PDF.</p>
                    <p>Vous pouvez regarder le cahier des charges en détails en cliquant <router-link to="/pdf">ici</router-link> !</p>

                </div>
            </div>

        <button id="toggleSpecificationModalBtn">Voir le cahier des charges</button>

    </section>

    <section id="cv" class="creation">

        <div>
            <h3> Le Curriculum Vitae</h3>
            <img class="screen" src="../assets/image/cv.png" alt="Capture d'écran d'un Curriculum Vitae">
        </div>
        

        <div id="cvModal" class="modal hidden">
            <div class="modal-content">

                <h4>" Le Curriculum Vitae"</h4>
                <p>Ce document a été créer le 30 août 2023.</p>
                <p>Pour la création de mon Cv j'ai utilisé le logiciel Visual Studio Code avec les langages HTML et CSS.</p>
                <p>Vous pouvez retrouver le projet complet sur mon <a href="https://github.com/Teakz9/Devoir-CV-HTML-CSS" target="_blank" class="modalLink">GitHub</a> !</p>

            </div>
        </div>

        <button id="toggleCvModalBtn">Voir le Curriculum Vitae</button>

    </section>

    <section id="com" class="creation">

      <div >
        <h3>L'espace commentaire dynamique</h3>

        <img class="screen" src="../assets/image/com.png" alt="Capture d'écran de la création d'un espace commentaire dynamique.">
      </div>
      

        <div id="comModal" class="modal hidden">
          <div class="modal-content">

              <h4>"L'espace commentaire dynamique"</h4>
              <p>Ce document a été créer le 21 septembre 2023.</p>
              <p>Pour cet exercice, un dossier préalablement créer en HTML et CSS m'a été fourni. <br> Ici, je devais réaliser missions dans le but d'améliorer le comportement de cet espace comementaire, pour ceci j'ai utilisé le langage JavaScript.</p>
              <p>Si vous souhaitez retrouver cet exercice, vous pouvez également aller voir sur mon <a href="https://github.com/Teakz9/Commentaire-dynamique-JS" target="_blank" class="modalLink">GitHub</a> !</p>

          </div>
        </div>

        <button id="toggleComModalBtn">Voir l'espace commentaire</button>

      </section>
</section>

</template>

<style scoped>

    #specificationModal{
        display: none;
        order: 1;
        flex-basis: 50%;
        margin-right: 10px;

    }

    .modalLink{
        color: orange;
    }

    .screen{
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
    }

    #creations{
        display: flex;
        justify-content: space-between;
        margin: 24px;
    }

    .creation:hover{
        box-shadow: 5px 5px 10px rgba(255, 166, 0, 0.233);
    }

    h2{
    color: black;
    -webkit-text-stroke: 1px orange;
    font-size: 3em;
    margin-left: 24px;
    }

    h3{
        color: orange;
        -webkit-text-stroke: 1px black;
        font-size: 1.5em;
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
        main{
            #creations{
                display: flex;
                flex-direction: column;
            }
        }
    }

</style>