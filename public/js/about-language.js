(() => {
  const STORAGE_KEY = 'about-language'
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
      if (isActive) {
        link.setAttribute('aria-current', 'true')
      } else {
        link.removeAttribute('aria-current')
      }
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
})()
