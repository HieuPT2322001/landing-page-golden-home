export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '-30px'
      }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('scroll-animate')) {
              observer.observe(node)
            }
            node.querySelectorAll('.scroll-animate').forEach((el) => {
              observer.observe(el)
            })
          }
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
})
