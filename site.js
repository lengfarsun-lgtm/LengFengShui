const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('#mobile-menu');
function closeMenu(){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','打开导航菜单');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';mobileMenu.hidden=open;menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'打开导航菜单':'关闭导航菜单');});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.querySelectorAll('.whatsapp-link').forEach(link=>{link.href='https://wa.me/60165205364?text='+encodeURIComponent(link.dataset.message||'林师父您好，我想了解咨询及预约。');});
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion.matches){document.body.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(section=>observer.observe(section));}
const locationVisual=document.querySelector('.location-visual');
const locationLabel=document.querySelector('.location-label');
if(matchMedia('(hover: hover)').matches&&!reducedMotion.matches){locationVisual.addEventListener('pointermove',event=>{const rect=locationVisual.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;locationLabel.style.transform='translate(-50%,-50%) rotateY('+(x*15)+'deg) rotateX('+(-y*12)+'deg)';});locationVisual.addEventListener('pointerleave',()=>{locationLabel.style.transform='';});}
