document.addEventListener('DOMContentLoaded', () => {
  
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
