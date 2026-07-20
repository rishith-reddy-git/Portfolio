const progress = document.querySelector('.progress');
const updateProgress = () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${max ? scrollY / max * 100 : 0}%`; };
addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const menu = document.querySelector('.menu'), nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.classList.toggle('open', open); menu.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
