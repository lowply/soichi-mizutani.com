(() => {
  function on(page) {
    return window.location.pathname.startsWith(page)
  }

  const navLinks = document.querySelectorAll('div#container main > nav ul li a');
  if (navLinks.length != 0) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href')
      if (window.location.pathname.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    })
  }

  if (on('/works/')) {
    const workLinks = document.querySelectorAll('div#container main section article nav ul li a');
    const workDisplay = document.querySelector('div#container main section h2 span');
    if (workLinks && workDisplay) {
      workLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const title = link.dataset.title;
          if (title) {
            workDisplay.textContent = " / " + title;
          }
        });
        link.addEventListener('mouseleave', () => {
          workDisplay.textContent = '';
        });
      });
    }
  }

  if (on('/about/') || on('/company/')) {
    const STORAGE_KEY = 'language'
    const DEFAULT_LANG = 'ja'

    const root = document.querySelector('[data-lang-root]')
    if (!root) {
      return
    }

    const panels = root.querySelectorAll('[data-lang-panel]')
    const links = root.querySelectorAll('#lang a[data-lang]')

    if (!panels.length || !links.length) {
      return
    }

    const readStoredLang = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved === 'ja' || saved === 'en' ? saved : null
      } catch {
        return null
      }
    }

    const persistLang = (lang) => {
      try {
        localStorage.setItem(STORAGE_KEY, lang)
      } catch {
        // Ignore storage errors (private mode, etc.)
      }
    }

    const applyLang = (lang) => {
      root.dataset.activeLang = lang

      panels.forEach((panel) => {
        const isActive = panel.getAttribute('data-lang-panel') === lang
        panel.toggleAttribute('hidden', !isActive)
        panel.setAttribute('aria-hidden', String(!isActive))
      })

      links.forEach((link) => {
        const isActive = link.dataset.lang === lang
        link.toggleAttribute('aria-current', isActive)
        link.classList.toggle('font-bold', isActive)
      })
    }

    const initialLang = readStoredLang() ?? DEFAULT_LANG
    applyLang(initialLang)

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const lang = link.dataset.lang
        if (!lang) {
          return
        }
        applyLang(lang)
        persistLang(lang)
      })
    })
  }
})()
