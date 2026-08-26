/* Hielos Tenerife — interacciones */

(() => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Cerrar al pulsar un enlace
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Header sombra al hacer scroll
  const header = document.getElementById('header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document
    .querySelectorAll('.card, .srv, .section__head, .contacto__info, .form, .faq__item, .rental-combo')
    .forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });

  // Carrusel de la flota
  const carousel = document.getElementById('flotaCarousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('.carousel__slide');
    const dotsWrap = carousel.querySelector('.carousel__dots');
    const prev = carousel.querySelector('.carousel__btn--prev');
    const next = carousel.querySelector('.carousel__btn--next');
    let idx = 0;
    let timer;

    const dots = Array.from(slides).map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Ir a la imagen ${i + 1}`);
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
      return b;
    });

    const go = (i, pause) => {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === idx));
      dots.forEach((d, n) => {
        d.classList.toggle('is-active', n === idx);
        d.setAttribute('aria-selected', n === idx ? 'true' : 'false');
      });
      if (pause) restart();
    };

    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => go(idx + 1), 5000);
    };

    prev.addEventListener('click', () => go(idx - 1, true));
    next.addEventListener('click', () => go(idx + 1, true));
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', restart);

    go(0);
  }

  // Voltear tarjeta de producto
  document.querySelectorAll('.product--flip').forEach(product => {
    const button = product.querySelector('.product__actions--static .product__flip-btn');
    const back = product.querySelector('.product__back');
    const productName = product.querySelector('h3').textContent;
    if (!button || !back) return;

    button.addEventListener('click', () => {
      const flipped = product.classList.toggle('is-flipped');
      button.textContent = flipped ? 'Ver info' : 'Ver producto';
      button.setAttribute('aria-label', flipped ? `Ver información de ${productName}` : `Ver imágenes de ${productName}`);
      button.setAttribute('aria-expanded', flipped ? 'true' : 'false');
      back.setAttribute('aria-hidden', flipped ? 'false' : 'true');
    });
  });

  // FAQ accordion — solo una abierta a la vez
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Selector múltiple de servicios (desplegable)
  const productDropdown = document.getElementById('productDropdown');
  if (productDropdown) {
    const productSummary = document.getElementById('productSummary');
    const boxes = Array.from(productDropdown.querySelectorAll('input[type="checkbox"]'));

    const updateSummary = () => {
      const checked = boxes.filter(b => b.checked);
      if (!checked.length) {
        productSummary.textContent = 'Selecciona…';
      } else if (checked.length <= 2) {
        productSummary.textContent = checked.map(b => b.nextElementSibling.textContent.trim()).join(', ');
      } else {
        productSummary.textContent = `${checked.length} servicios seleccionados`;
      }
      productSummary.classList.toggle('is-placeholder', !checked.length);
    };

    boxes.forEach(b => b.addEventListener('change', updateSummary));

    // Cerrar al pulsar fuera o con Escape
    document.addEventListener('click', e => {
      if (productDropdown.open && !productDropdown.contains(e.target)) productDropdown.open = false;
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && productDropdown.open) productDropdown.open = false;
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('reset', () => setTimeout(updateSummary, 0));

    updateSummary();
  }

  // Form -> WhatsApp
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const products = data.getAll('product').map(v => v.toString());
      const message = (data.get('message') || '').toString().trim();

      if (!name || !phone || !products.length) {
        status.textContent = 'Por favor, rellena nombre, teléfono y marca al menos un servicio.';
        status.classList.add('is-error');
        return;
      }

      const productLabels = {
        'cubitos-2': 'Cubitos 2 kg',
        'cubitos-25': 'Cubitos 2,5 kg',
        'picado': 'Hielo picado 2,5 kg',
        'alquiler-congelador': 'Alquiler de congelador',
        'mixto': 'No estoy seguro'
      };

      const lines = [
        'Hola, vengo desde la web hielostenerife.es y me gustaría hacer una solicitud.',
        '',
        `*Nombre:* ${name}`,
        `*Teléfono:* ${phone}`,
        `*Servicios:* ${products.map(p => productLabels[p] || p).join(', ')}`,
        message ? `*Mensaje:* ${message}` : null
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      const url = `https://wa.me/34600303084?text=${text}`;

      status.classList.remove('is-error');
      status.textContent = 'Abriendo WhatsApp…';
      window.open(url, '_blank');

      setTimeout(() => {
        status.textContent = '¡Gracias! Te hemos redirigido a WhatsApp. Si no se abrió, llámanos al 600 30 30 84.';
        form.reset();
      }, 800);
    });
  }
})();
