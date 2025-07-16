document.addEventListener('DOMContentLoaded', function() {
  // Play local click.mp3 sound when clicking links
  const clickSound = new Audio('click.mp3');
  clickSound.preload = 'auto';
  document.body.addEventListener('mousedown', function(e) {
    if (e.target.tagName === 'A') {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });
  // 8. Professional greeting sprite
  const greetSprite = document.createElement('div');
  greetSprite.innerHTML = '<span style="font-size:2.5rem;">🧑‍💼</span><div style="font-size:1.1rem; margin-top:8px;">Welcome to my portfolio!</div>';
  greetSprite.style.position = 'fixed';
  greetSprite.style.top = '30px';
  greetSprite.style.left = '50%';
  greetSprite.style.transform = 'translateX(-50%)';
  greetSprite.style.background = '#fff';
  greetSprite.style.color = '#050A30';
  greetSprite.style.padding = '18px 32px';
  greetSprite.style.borderRadius = '12px';
  greetSprite.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
  greetSprite.style.zIndex = '1002';
  greetSprite.style.display = 'flex';
  greetSprite.style.flexDirection = 'column';
  greetSprite.style.alignItems = 'center';
  greetSprite.style.fontFamily = 'inherit';
  document.body.appendChild(greetSprite);
  setTimeout(() => greetSprite.remove(), 3000);
  // 1. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 2. Back to Top button
  const backToTop = document.createElement('button');
  backToTop.textContent = '↑ Top';
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '30px';
  backToTop.style.right = '30px';
  backToTop.style.display = 'none';
  backToTop.style.padding = '10px 18px';
  backToTop.style.background = '#62b3ff';
  backToTop.style.color = '#fff';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '6px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.zIndex = '1000';
  document.body.appendChild(backToTop);
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 100 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. Animate elements on scroll (fade-in)
  const fadeEls = document.querySelectorAll('.highlight, .skills-grid, .right-column');
  const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.7s, transform 0.7s';
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // 4. Show/hide sections on click (toggle highlights)
  document.querySelectorAll('.highlight h2').forEach(h2 => {
    h2.style.cursor = 'pointer';
    h2.addEventListener('click', () => {
      const section = h2.parentElement;
      section.classList.toggle('collapsed');
      if (section.classList.contains('collapsed')) {
        section.querySelectorAll('p, img, ul').forEach(el => el.style.display = 'none');
      } else {
        section.querySelectorAll('p, img, ul').forEach(el => el.style.display = '');
      }
    });
  });

  // 5. Dark/light mode toggle


  // 7. Highlight skills on hover
  document.querySelectorAll('.skills-grid span').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.style.background = '#62b3ff';
      skill.style.color = '#050A30';
      skill.style.transform = 'scale(1.1)';
      skill.style.transition = 'all 0.2s';
    });
    skill.addEventListener('mouseleave', () => {
      skill.style.background = '#0a1b56';
      skill.style.color = '#fff';
      skill.style.transform = 'scale(1)';
    });
  });

  // Clever job opportunity popup
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div style="font-size:1.2rem; font-weight:600; margin-bottom:8px;">Got a Job?</div>
    <div style="margin-bottom:14px; font-size:1rem;">If you're looking for a results-driven marketer, let's talk! <br>Send me your job opportunities and let's make your next project a win.</div>
    <a id="gmailJobLink" href="#" style="color:#fff; background:#62b3ff; padding:8px 18px; border-radius:6px; text-decoration:none; font-weight:500;">Email Joshua</a>
    <button id="closeJobPopup" style="margin-top:18px; background:#0a1b56; color:#fff; border:none; border-radius:6px; padding:6px 16px; cursor:pointer; font-size:1rem;">No thanks</button>
  `;
  popup.style.position = 'fixed';
  popup.style.bottom = '40px';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.background = '#fff';
  popup.style.color = '#050A30';
  popup.style.padding = '28px 36px';
  popup.style.borderRadius = '14px';
  popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
  popup.style.zIndex = '2000';
  popup.style.display = 'flex';
  popup.style.flexDirection = 'column';
  popup.style.alignItems = 'center';
  popup.style.fontFamily = 'inherit';
  document.body.appendChild(popup);
  document.getElementById('closeJobPopup').onclick = function() {
    popup.remove();
  };
  document.getElementById('gmailJobLink').onclick = function(e) {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=josh.brouard@proton.me&su=Job%20Opportunity%20for%20Joshua', '_blank');
  };
});
