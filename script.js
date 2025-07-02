const toggleButton = document.getElementById('toggleDark');
const icon = document.getElementById('darkIcon');

// 1. Cek localStorage saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark');
    icon.textContent = '🌞';
  } else {
    icon.textContent = '🌙';
  }
});

// 2. Toggle dark/light mode + simpan ke localStorage
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
  icon.textContent = isDark ? '🌞' : '🌙';
});
