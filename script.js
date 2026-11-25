'use strict';

// Número de encomendas informado pela Sampi: país + DDD + número, só dígitos.
const SAMPI_WHATSAPP = '5561982123090';

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferências continuam funcionando nesta página. */ } }
};
const themeButton = document.querySelector('[data-theme]');
const fontButton = document.querySelector('[data-font]');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeButton?.setAttribute('aria-pressed', String(dark));
  if (themeButton) themeButton.textContent = dark ? 'Ativar modo claro' : 'Ativar modo escuro';
}
setTheme(storage.get('sampi-theme') === 'dark');
function setLargeText(large) {
  document.body.classList.toggle('large-text', large);
  fontButton?.setAttribute('aria-pressed', String(large));
  if (fontButton) fontButton.textContent = large ? 'Restaurar tamanho do texto' : 'Aumentar texto';
}
setLargeText(storage.get('sampi-large-text') === 'true');
themeButton?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  setTheme(dark); storage.set('sampi-theme', dark ? 'dark' : 'light');
});
fontButton?.addEventListener('click', () => {
  const large = !document.body.classList.contains('large-text');
  setLargeText(large); storage.set('sampi-large-text', String(large));
});
const accessButton = document.querySelector('[data-accessibility]');
const accessPanel = document.querySelector('#acessibilidade');
function closeAccess(returnFocus = false) {
  if (!accessPanel) return;
  accessPanel.hidden = true; accessButton?.setAttribute('aria-expanded', 'false');
  if (returnFocus) accessButton?.focus();
}
accessButton?.addEventListener('click', () => {
  accessPanel.hidden = !accessPanel.hidden;
  accessButton.setAttribute('aria-expanded', String(!accessPanel.hidden));
  if (!accessPanel.hidden) accessPanel.querySelector('button')?.focus();
});
document.querySelector('[data-close-access]')?.addEventListener('click', () => closeAccess(true));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && accessPanel && !accessPanel.hidden) closeAccess(true); });
document.addEventListener('click', event => { if (accessPanel && !accessPanel.hidden && !accessPanel.contains(event.target) && !accessButton.contains(event.target)) closeAccess(); });
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

const slides = [
  { image: 'cookies-sortidos-fundo-claro-01.jpeg', alt: 'Cookies de massas e coberturas variadas com pedaços de chocolate e confeitos coloridos', caption: 'Difícil é escolher um só.' },
  { image: 'cookie-recheado-chocolate-cremoso-01.jpeg', alt: 'Cookie partido ao meio com recheio cremoso de chocolate', caption: 'Uma pausa com muito chocolate.' },
  { image: 'caixa-presente-cookies-01.jpeg', alt: 'Caixa de cookies da Sampi embalada com laço para presente', caption: 'Carinho que também vira presente.' }
];
let currentSlide = 0;
function changeSlide(direction) {
  const photo = document.querySelector('#hero-photo');
  if (!photo) return;
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  const slide = slides[currentSlide];
  photo.src = `imagens/${slide.image}`; photo.alt = slide.alt;
  document.querySelector('#photo-caption').textContent = slide.caption;
  document.querySelector('#slide-counter').textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}
document.querySelector('#slide-prev')?.addEventListener('click', () => changeSlide(-1));
document.querySelector('#slide-next')?.addEventListener('click', () => changeSlide(1));
document.querySelector('.hero-visual')?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); changeSlide(event.key === 'ArrowLeft' ? -1 : 1); }
});

const products = [
  { name: 'Tradicional', category: 'individuais', price: 7, description: 'Massa tradicional com chocolate meio amargo.', image: 'cookie-recheado-tradicional.jpeg', alt: 'Cookie tradicional partido ao meio, com pedaços de chocolate', tag: 'O clássico · 60 g' },
  { name: 'Red Velvet', category: 'individuais', price: 7.5, description: 'Massa Red Velvet com chocolate branco.', image: 'cookie-red-velvet-partido.jpeg', alt: 'Cookie Red Velvet partido ao meio, com pedaços de chocolate branco', tag: '60 g' },
  { name: 'Eclipse', category: 'individuais', price: 7.5, description: 'Massa de cacau com chocolate branco.', image: 'cookies-sortidos-fundo-claro-01.jpeg', alt: 'Composição com cookie de cacau e outros sabores', tag: '60 g' },
  { name: 'M&M', category: 'individuais', price: 7.5, description: 'Massa tradicional com M&M e chocolate meio amargo.', image: 'cookies-com-confeitos-coloridos.jpeg', alt: 'Cookies com confeitos coloridos e pedaços de chocolate', tag: '60 g' },
  { name: 'Nutella', category: 'individuais', price: 9, description: 'Massa tradicional com chocolate meio amargo e recheio de Nutella.', image: 'cookie-recheado-nutella.jpeg', alt: 'Foto ilustrativa de cookie com recheio cremoso de chocolate', tag: 'Recheado · 60 g' },
  { name: 'Kinder', category: 'individuais', price: 9, description: 'Massa tradicional com chocolate branco e meio amargo, recheada com creme Bueno.', image: 'cookie-partido-recheio-claro.jpeg', alt: 'Foto ilustrativa de cookie partido com recheio claro', tag: 'Recheado · 60 g' },
  { name: 'Mini cookies', category: 'mini', priceLabel: 'A partir de R$ 3,00', description: 'Tradicional, Eclipse, Red Velvet e M&M. Cookies de 20 g para festas e eventos. Até 80 unidades: R$ 3,00 por unidade. A partir de 81 unidades: R$ 3,50 por unidade.', image: 'mini-cookies-com-chocolate.jpeg', alt: 'Mini cookies com pedaços de chocolate', tag: 'Para compartilhar · 20 g' },
  { name: 'Cesta de cookies', category: 'cestas', description: 'Encomendas a partir de 10 cookies, com todos os sabores disponíveis. Monte sua combinação e consulte o valor.', image: 'caixa-presente-cookies-02.jpeg', alt: 'Caixa para presente com cookies embalados e laço', tag: 'A partir de 10 cookies' }
];
const catalog = document.querySelector('#catalogo');
const search = document.querySelector('#product-search');
let activeCategory = 'individuais';
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
function renderProducts() {
  if (!catalog) return;
  const query = normalize(search.value.trim());
  const filtered = products.filter(product => product.category === activeCategory && normalize(`${product.name} ${product.description}`).includes(query));
  catalog.replaceChildren();
  filtered.forEach(product => {
    const card = document.createElement('article'); card.className = 'product-card';
    const imageWrap = document.createElement('div'); imageWrap.className = 'product-image-wrap';
    const image = document.createElement('img'); image.width = 600; image.height = 492; image.alt = product.alt; image.loading = 'lazy'; image.src = `imagens/${product.image}`;
    const tag = document.createElement('span'); tag.className = 'product-tag'; tag.textContent = product.tag;
    imageWrap.append(image, tag);
    const title = document.createElement('div'); title.className = 'product-title';
    const name = document.createElement('h3'); name.textContent = product.name;
    const price = document.createElement('span'); price.className = 'product-price'; price.textContent = product.priceLabel || (product.price ? currency.format(product.price) : 'Sob consulta');
    title.append(name, price);
    const description = document.createElement('p'); description.textContent = product.description;
    const link = document.createElement('a'); link.className = 'text-link'; link.href = '#contato'; link.textContent = 'Quero esse'; link.setAttribute('aria-label', `Quero esse: ${product.name}`);
    link.addEventListener('click', () => {
      const form = document.querySelector('#contact-form');
      form.elements.interesse.value = product.category === 'individuais' ? 'Cookies individuais' : product.category === 'mini' ? 'Mini cookies para festas' : 'Cesta de cookies';
      form.elements.mensagem.value = `Gostaria de saber mais sobre ${product.name}.`;
      clearContactFeedback();
    });
    card.append(imageWrap, title, description, link); catalog.append(card);
  });
  if (!filtered.length) { const empty = document.createElement('p'); empty.className = 'empty-results'; empty.textContent = 'Nenhum sabor encontrado nesta categoria. Tente outro nome ou escolha outra aba.'; catalog.append(empty); }
  document.querySelector('#result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'produto encontrado' : 'produtos encontrados'}.`;
}
function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll('[data-category]').forEach(tab => {
    const selected = tab.dataset.category === category;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
  });
  catalog?.setAttribute('aria-labelledby', `tab-${category}`);
  renderProducts();
}
const tabs = [...document.querySelectorAll('[data-category]')];
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCategory(tab.dataset.category));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); tabs[next].focus(); selectCategory(tabs[next].dataset.category); }
  });
});
search?.addEventListener('input', renderProducts);
document.querySelectorAll('[data-jump-category]').forEach(link => link.addEventListener('click', () => { search.value = ''; selectCategory(link.dataset.jumpCategory); }));
renderProducts();

const whatsappReady = /^55\d{10,11}$/.test(SAMPI_WHATSAPP);
const contactForm = document.querySelector('#contact-form');
const contactFeedback = document.querySelector('#contact-feedback');

function clearContactFeedback() {
  if (!contactFeedback) return;
  contactFeedback.hidden = true;
  contactFeedback.replaceChildren();
}

contactForm?.addEventListener('input', clearContactFeedback);
contactForm?.addEventListener('change', clearContactFeedback);

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('nome').trim(); const message = data.get('mensagem').trim();
  const feedback = document.querySelector('#contact-feedback');
  feedback.hidden = false; feedback.replaceChildren();
  if (!name || message.length < 5) { feedback.textContent = 'Preencha seu nome e uma mensagem com pelo menos cinco caracteres, sem contar espaços nas extremidades.'; return; }
  const text = `Olá, Sampi! Meu nome é ${name}.\nInteresse: ${data.get('interesse')}.\n${data.get('email') ? `E-mail: ${data.get('email')}\n` : ''}\n${message}`;
  const preview = document.createElement('p'); preview.textContent = text; feedback.append(preview);
  const notice = document.createElement('p');
  notice.textContent = whatsappReady ? 'Tudo certo? Abra o WhatsApp e confirme o envio por lá.' : 'Sua mensagem está pronta, mas ainda não foi enviada. O WhatsApp será disponibilizado em breve. Por enquanto, entre em contato pelo Instagram @sampi_cookies.';
  feedback.append(notice);
  if (whatsappReady) { const link = document.createElement('a'); link.className = 'button button-dark'; link.href = `https://wa.me/${SAMPI_WHATSAPP}?text=${encodeURIComponent(text)}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Abrir WhatsApp (nova aba)'; feedback.append(link); }
});

document.querySelector('#show-password')?.addEventListener('click', event => {
  const input = document.querySelector('#demo-password'); const show = input.type === 'password';
  input.type = show ? 'text' : 'password'; event.currentTarget.textContent = show ? 'Ocultar' : 'Mostrar'; event.currentTarget.setAttribute('aria-pressed', String(show));
});
document.querySelector('#login-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget; const feedback = document.querySelector('#login-feedback'); feedback.hidden = false;
  if (form.elements.email.value === 'visitante@example.com' && form.elements.senha.value === 'sampi-demo') {
    feedback.textContent = 'Demonstração concluída! Em um sistema com autenticação, você acessaria sua conta aqui. Nenhum dado foi enviado ou salvo. Explore nosso cardápio pelo link abaixo.';
  } else { feedback.textContent = 'Use os dados fictícios da demonstração: visitante@example.com e senha sampi-demo. Não utilize sua senha pessoal.'; }
});
