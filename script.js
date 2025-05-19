document.addEventListener('DOMContentLoaded', () => {
  // Three.js motion graphic: Spinning 3D cube (placeholder for chess piece)
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
  renderer.setSize(400, 400);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x1F51FF, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('three-canvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    if (email) {
      alert(`Thank you for joining, ${email}! ${message ? 'We received your message.' : ''}`);
      form.reset();
    }
  });

 
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
