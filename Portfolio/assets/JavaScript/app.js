document.addEventListener('DOMContentLoaded', () => {
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

  const comModal = document.getElementById('comModal');
  const toggleComModalBtn = document.getElementById('toggleComModalBtn');

  function openComModal() {
    comModal.style.display = 'block';
    toggleComModalBtn.textContent = "Fermer l'espace commentaire";
  }

  function closeComModal() {
    comModal.style.display = 'none';
    toggleComModalBtn.textContent = "Ouvrir l'espace commentaire";
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
});


