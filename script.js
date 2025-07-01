window.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  const rotateY = deltaX / 25; // ← 50 → 25 にして傾き強く
  const rotateX = -deltaY / 25;

  const neonText = document.getElementById('neonText');
  neonText.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
