const toggleButton = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateIcon() {
  themeIcon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateIcon();
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
  updateIcon();
};
