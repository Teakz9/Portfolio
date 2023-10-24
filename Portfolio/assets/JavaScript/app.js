document.addEventListener('DOMContentLoaded', () => {

  const myPic = document.getElementById('myPic');
  myPic.addEventListener('click', () =>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

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
    } else {
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
    } else {
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
  } else {
    openCvModal(); // Ouvre le deuxième modal par défaut
  }

  window.addEventListener('click', (event) => {
    if (event.target !== cvModal && event.target !== toggleCvModalBtn) {
      closeCvModal();
    }
  });

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
    } else {
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
    closeComModal(); // Ferme le deuxième modal par défaut
  } else {
    openComModal(); // Ouvre le deuxième modal par défaut
  }

  window.addEventListener('click', (event) => {
    if (event.target !== comModal && event.target !== toggleComModalBtn) {
      closeComModal();
    }
  });

  const formulaire = document.getElementById('myForm');
  const boutonSubmit = document.getElementById('boutonSubmit');
  
  formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    afficherMessage();
    reinitialiserChamps();
  });
  
  function afficherMessage() {
    // Créer un élément de pop-up
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = 'Le formulaire a été soumis à l\'adresse mail : ybreton27@gmail.com';
  
    // Ajouter le pop-up à la page
    document.body.appendChild(popup);
  
    // Fermer le pop-up après un certain délai (par exemple, 3 secondes)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }

  function reinitialiserChamps(){
    formulaire.reset();
  }

  const lastUpdateDate = document.getElementById('last-update-date');
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  lastUpdateDate.textContent = currentDate.toLocaleDateString(fr-FR, options);

  const presentationSection = document.getElementById('presentation');
  const creationsSection = document.getElementById('creations');
  const formSection = document.getElementById('form');

  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav');

});


