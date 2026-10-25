import '@fontsource/nunito/latin-400.css';
import '@fontsource/nunito/latin-600.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/nunito/latin-900.css';
import './style.css';
import { dancers, performances, contactEmail, applicationLinks, founderPhoto } from './content.js';

const main = document.querySelector('main');
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const arrow = '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const button = (label, form, light = false) => `<button class="button ${light ? 'button-light' : 'button-blue'}" data-form="${form}">${label} ${arrow}</button>`;
const star = '<span class="sparkle" aria-hidden="true">✦</span>';
const band = () => `<div class="style-band" aria-label="Bollywood, Hip-Hop, K-Pop, and connection"><span>BOLLYWOOD</span>${star}<span>HIP-HOP</span>${star}<span>K-POP</span>${star}<span>CONNECTION</span>${star}<span>JOY</span></div>`;
const cta = () => `<section class="cta section-wrap"><div><p class="eyebrow">LET’S MAKE SOMEONE’S DAY</p><h2>Be part of<br />something bigger.</h2><p>Whether you’re a senior center looking to bring joy to your residents or a high school dancer ready to make a difference, we’d love to hear from you.</p></div><div class="cta-actions">${button('Book a performance', 'booking')}<a class="button button-outline" href="#join">Join our crew ${arrow}</a></div><span class="cta-star" aria-hidden="true">✦</span></section>`;

function about() {
 return `<section class="hero section-wrap">
  <div class="hero-copy"><p class="eyebrow"><span class="tiny-star" aria-hidden="true">✦</span> YOUNG HEARTS. JOYFUL STEPS.</p><h1>A little movement.<br />A whole lot<br />of <span class="joy">joy.<svg viewBox="0 0 220 20" aria-hidden="true"><path d="M5 14Q100 -3 214 10"/></svg></span></h1><p>Bringing generations together, one dance at a time. We’re a student-led dance crew spreading happiness to senior communities across New Jersey.</p><div class="hero-actions">${button('Our story', 'story')}<a class="text-link" href="#community">See us in action ${arrow}</a></div><div class="hero-note"><span class="note-line"></span> A little time. A meaningful difference.</div></div>
  <div class="hero-art"><div class="photo-frame"><img src="/images/dance.jpeg" alt="Dancers moving together in a bright studio, from the Silver Steps brand guide" fetchpriority="high" /><div class="photo-label"><span aria-hidden="true">✦</span> MADE TO MOVE.<br /><span class="label-second">HERE TO CONNECT.</span></div></div><div class="round-seal" aria-label="Dance with purpose, make an impact">DANCE WITH<br /><b>✦</b><br />PURPOSE</div><span class="art-star" aria-hidden="true">✦</span><div class="art-caption"><span>01 /</span> Good energy. Shared with everyone.</div></div>
 </section>${band()}
 <section id="founder" class="founder section-wrap"><div class="founder-art">${founderPhoto ? `<img class="founder-photo" src="${esc(founderPhoto)}" alt="Guneet Kapur, founder of Silver Steps" />` : `<div class="founder-placeholder"><span class="founder-monogram">GK</span><span>Founder portrait coming soon</span><span class="portrait-star" aria-hidden="true">✦</span></div>`}<div class="founder-tag"><strong>Guneet Kapur</strong><span>FOUNDER & DANCER</span></div></div><div class="founder-copy"><p class="eyebrow">MEET THE FOUNDER</p><h2>Hi, I’m Guneet Kapur<span class="blue-dot">.</span></h2><p>I’m a senior at Millburn High School in Millburn, New Jersey, and dance has been a huge part of my life for the past eight years. In my freshman year, I started teaching my own dance classes to children, which taught me how powerful dance can be in bringing people together and spreading happiness.</p><p>I’m passionate about giving back to my community, and in my sophomore year, I noticed that seniors in our local centers often miss out on dynamic, engaging entertainment. That’s why I created Silver Steps—to bring the joy of dance to community members who deserve to feel seen, valued, and celebrated.</p><p>Leading this crew has been one of the most rewarding experiences of my life, and I can’t wait to continue growing our impact across New Jersey.</p><span class="signature">With heart, Guneet ♡</span></div></section>
 <section class="purpose"><div class="section-wrap purpose-inner"><p class="eyebrow">WHY SILVER STEPS EXISTS</p><h2>Joy has no age limit.<br /><span>Neither does connection.</span></h2><div class="purpose-bottom"><span class="purpose-flower" aria-hidden="true">✺</span><div><p>We believe that everyone in our community, especially our seniors, deserves access to moments of joy, connection, and excitement.</p><p>Silver Steps was created to bridge the gap between generations and show that young people care about uplifting the older members of our community through the universal language of dance. Every performance is our way of honoring the seniors who built the world we live in today.</p></div></div></div></section>${cta()}`;
}
function team() {
 return `<section class="page-intro section-wrap"><p class="eyebrow">OUR PEOPLE, OUR HEART</p><h1>Meet the<br />Silver Steps <span class="blue-text">crew.</span></h1><p>Silver Steps began with one dancer’s dream to share joy through movement and grow into something bigger.</p><span class="intro-star" aria-hidden="true">✦</span></section>${band()}<section class="team-section section-wrap"><div class="section-heading"><div><p class="eyebrow">THE FACES OF SILVER STEPS</p><h2>Meet the dancers.</h2></div><p>Meet the students behind every performance. Each dancer brings their own style, energy, and heart to Silver Steps.</p></div><div class="dancer-grid">${dancers.map(d => `<article class="dancer"><div class="dancer-photo ${d.photo ? '' : 'empty-portrait'}">${d.photo ? `<img loading="lazy" src="${esc(d.photo)}" alt="${esc(d.name || `Dancer ${d.number}`)}" />` : `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="38" r="14"/><path d="M23 85v-6a27 27 0 0 1 54 0v6"/></svg><span class="dancer-number">${String(d.number).padStart(2, '0')}</span>`}</div><h3>${esc(d.name || `Dancer ${String(d.number).padStart(2, '0')}`)}</h3>${!d.name ? '<p>Name & photo coming soon</p>' : ''}</article>`).join('')}</div></section><section class="join-banner section-wrap"><p class="eyebrow">THERE’S ROOM FOR YOUR RHYTHM</p><h2>Your next step<br />could start here.</h2><p>Want to start a chapter in your local community or join an existing crew? Learn more about joining Silver Steps.</p><a class="button button-blue" href="#join">Take the next step ${arrow}</a></section>`;
}
function youtubeId(url) {
 try { const u = new URL(url); let id = ''; if (u.hostname === 'youtu.be') id = u.pathname.slice(1); else if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(u.hostname)) id = u.searchParams.get('v') || u.pathname.split('/').filter(Boolean).pop(); return /^[\w-]{11}$/.test(id) ? id : ''; } catch { return ''; }
}
function videoCard(v) {
 const id = youtubeId(v.url);
 return `<article class="video-card">${id ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(v.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<div class="video-placeholder"><span class="play-icon" aria-hidden="true">▶</span><span>VIDEO COMING SOON</span></div>`}<h3>${esc(v.title)}</h3>${v.artist ? `<p>${esc(v.artist)}</p>` : ''}</article>`;
}
function community() {
 return `<section class="page-intro section-wrap"><p class="eyebrow">A LITTLE LOOK AT THE JOY</p><h1>Watch us<br />in <span class="blue-text">action.</span></h1><div class="intro-bottom"><p>Bringing together different dance styles and generations. Here are a few moments from our past performances.</p>${button('Book a performance', 'booking')}</div><span class="intro-star" aria-hidden="true">✦</span></section>${band()}<div class="section-wrap performances">${performances.map((p, i) => `<section class="performance-group"><div class="performance-heading"><span class="performance-index">${String(i + 1).padStart(2, '0')}</span><div><p class="eyebrow">${esc(p.location)}</p><h2>${esc(p.venue)}</h2><p class="performance-date">${esc(p.date)}${p.description ? ' · ' + esc(p.description) : ''}</p></div></div><div class="video-grid">${p.videos.map(videoCard).join('')}</div></section>`).join('')}</div><section class="community-cta"><div class="section-wrap"><p class="eyebrow">LET’S SHARE THE JOY</p><h2>Want Silver Steps<br />at your community?</h2><p>Let’s create these moments of joy together.</p>${button('Book a performance', 'booking', true)}</div></section><section class="faq section-wrap"><div><p class="eyebrow">GOOD TO KNOW</p><h2>Frequently asked<br />questions.</h2></div><div class="faq-list"><details><summary>How long are the performances?<span aria-hidden="true">+</span></summary><p>We’ll coordinate the program and timing with your center. Include your preferred performance length in your booking inquiry so we can plan together.</p></details><details><summary>Is each performance free?<span aria-hidden="true">+</span></summary><p>Silver Steps is a student-led community service initiative. Contact us to confirm the details for your center, including any costs, before booking.</p></details></div></section>`;
}
function join() {
 return `<section class="page-intro section-wrap"><p class="eyebrow">YOUR TALENT. A LITTLE PURPOSE.</p><h1>Dance with purpose.<br /><span class="blue-text">Make an impact.</span></h1><p>Silver Steps is more than a dance crew. It’s a chance to use your talent to bring joy to seniors in our community. If you’re a high school student in New Jersey who loves to dance and wants to make a difference, we’d love to have you.</p><div class="hero-actions">${button('Join the crew', 'crew')}<a href="#chapter-application" class="text-link">Start a chapter ${arrow}</a></div></section>${band()}<section class="join-story section-wrap"><div class="join-image"><img src="/images/community.jpeg" alt="A group of young dancers practicing together outdoors, from the brand guide" loading="lazy"/><span class="image-sticker">MOVE TOGETHER.<br />GIVE BACK TOGETHER.</span></div><div><p class="eyebrow">WHY JOIN SILVER STEPS</p><h2>More than<br />just dance.</h2><p>When you join Silver Steps, you’re not just performing—you’re making a real difference in people’s lives. You’ll develop your skills across Bollywood, Hip-Hop, and K-Pop styles while learning the value of community service and intergenerational connection.</p><p>Our performances give you the chance to share what you love with people who appreciate and enjoy it. Plus, you’ll be part of a supportive crew of dancers who care about using their talents for good.</p><p>Whether you’re looking to build your college application, give back to your community, or dance with purpose, Silver Steps is the place for you.</p></div></section><section class="who-section"><div class="section-wrap who-inner"><div><p class="eyebrow">WHAT WE’RE LOOKING FOR</p><h2>A little enthusiasm.<br />A lot of heart.</h2></div><div><h3>Who should join?</h3><p>We welcome high school dancers of all skill levels who are passionate about performance and community service. You don’t need to be a professional dancer—you just need enthusiasm, commitment, and a desire to bring joy to seniors.</p><p>We practice regularly to prepare for performances, so reliability and teamwork are important. Whether you specialize in Bollywood, Hip-Hop, K-Pop, or want to learn multiple styles, there’s a place for you on our crew.</p><div class="join-chips"><span>Grades 9–12</span><span>All skill levels</span><span>New Jersey</span></div></div></div></section><section class="applications section-wrap"><article id="chapter-application" class="application-card lavender"><span class="application-number">01 / START SOMETHING</span><span class="application-icon" aria-hidden="true">✦</span><h2>New town.<br />Same purpose.</h2><h3>Start a new chapter of SSDC</h3><p>Are you a high school student in grades 9–12 who would like to start a chapter of the Silver Steps Dance Crew in your high school or town? Let’s bring Silver Steps to your community.</p>${button('Apply to start a chapter', 'chapter')}</article><article class="application-card aqua"><span class="application-number">02 / FIND YOUR PEOPLE</span><span class="application-icon" aria-hidden="true">✳</span><h2>Your crew<br />is waiting.</h2><h3>Join the crew!</h3><p>Are you a high school student in grades 9–12 interested in joining an existing local chapter of Silver Steps? Bring your energy, your favorite moves, and your heart.</p>${button('Apply to join a dance crew', 'crew')}</article></section>`;
}
const pages = { about, team, community, join };
let currentPage;
function render() {
 const hash = location.hash.slice(1) || 'about';
 if (hash === 'main') { main.focus(); return; }
 if (['founder', 'chapter-application'].includes(hash)) {
  const page = hash === 'founder' ? 'about' : 'join';
  if (currentPage !== page) showPage(page);
  requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
  return;
 }
 showPage(pages[hash] ? hash : 'about');
}
function showPage(page) {
 currentPage = page;
 main.innerHTML = pages[page]();
 document.title = `${{ about: 'About', team: 'Our Team', community: 'Community', join: 'Join the Crew' }[page]} — Silver Steps Dance Crew`;
 document.querySelectorAll('nav a').forEach(a => {
  if (a.dataset.page === page) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
 });
 closeMenu();
 window.scrollTo({ top: 0, behavior: 'instant' });
}
function closeMenu() { document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false'); document.querySelector('nav').classList.remove('open'); }
document.querySelector('.menu-toggle').addEventListener('click', e => {
 const expanded = e.currentTarget.getAttribute('aria-expanded') === 'true';
 e.currentTarget.setAttribute('aria-expanded', String(!expanded));
 document.querySelector('nav').classList.toggle('open', !expanded);
});
window.addEventListener('hashchange', render);
document.querySelector('#year').textContent = new Date().getFullYear();

const dialog = document.querySelector('dialog');
const formTitles = { contact: 'Let’s connect.', booking: 'Bring joy to your community.', chapter: 'Start something meaningful.', crew: 'Find your rhythm. Join our crew.' };
function openForm(type) {
 const external = applicationLinks[type];
 if (external && /^https:\/\//.test(external)) { window.location.assign(external); return; }
 const isApplication = ['chapter', 'crew'].includes(type);
 const field = (label, name, inputType = 'text', required = true) => `<label>${label}${required ? ' <span aria-hidden="true">*</span>' : ''}<input name="${name}" type="${inputType}" ${required ? 'required' : ''} ${name === 'name' ? 'autocomplete="name"' : name === 'email' ? 'autocomplete="email"' : ''} /></label>`;
 document.querySelector('#dialog-content').innerHTML = `<p class="eyebrow">SILVER STEPS DANCE CREW</p><h2 id="dialog-title">${formTitles[type]}</h2><p>${contactEmail ? 'Fill in the details below to prepare an email to Silver Steps.' : 'Our online submission destination is being set up. You can prepare and download your details below. Nothing will be sent or stored online.'}</p><form data-type="${type}">${field('Your name', 'name')}${field('Email address', 'email', 'email')}${isApplication ? field('School', 'school') + `<div class="form-row"><label>Grade <span aria-hidden="true">*</span><select name="grade" required><option value="">Select grade</option>${[9, 10, 11, 12].map(n => `<option>${n}</option>`).join('')}</select></label>${field('Town / city', 'town')}</div>` : type === 'booking' ? field('Center / organization', 'organization') + field('Preferred date', 'date', 'date', false) : ''}<label>${isApplication ? 'Tell us about your dance interests' : 'How can we help?'} <span aria-hidden="true">*</span><textarea name="message" rows="4" required></textarea></label><p class="form-note">* Required fields. ${contactEmail ? 'Your email app will open; review and send your message there.' : 'Downloads stay on your device. This form does not submit an application or confirm a booking.'}</p><button class="button button-blue" type="submit">${contactEmail ? 'Prepare email' : 'Download my inquiry'} ${arrow}</button><p class="form-status" role="status"></p></form>`;
 dialog.showModal();
}
document.addEventListener('click', e => {
 const b = e.target.closest('[data-form]');
 if (!b) return;
 if (b.dataset.form === 'story') { location.hash = 'founder'; return; }
 openForm(b.dataset.form);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('submit', e => {
 e.preventDefault();
 const form = e.target;
 const data = new FormData(form);
 const subject = `Silver Steps — ${ { booking: 'Performance inquiry', contact: 'Contact inquiry', chapter: 'New chapter application', crew: 'Crew application' }[form.dataset.type]}`;
 const body = [...data.entries()].map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join('\n\n');
 if (contactEmail) {
  window.location.href = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form-status').textContent = 'Your email draft is ready. Please send it from your email app to complete your inquiry.';
 } else {
  const url = URL.createObjectURL(new Blob([subject + '\n\n' + body + '\n\nThis is a local draft. It has not been submitted to Silver Steps.'], { type: 'text/plain' }));
  const a = document.createElement('a'); a.href = url; a.download = `silver-steps-${form.dataset.type}-draft.txt`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  form.querySelector('.form-status').textContent = 'Your inquiry draft has been downloaded. It has not been submitted; please keep it until our contact destination is available.';
 }
});
render();
