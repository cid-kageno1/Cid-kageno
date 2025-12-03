class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-40
                  px-6 py-2 rounded-full
                  backdrop-blur-lg bg-white/20 dark:bg-black/20
                  border border-white/25 dark:border-white/10
                  shadow-lg flex items-center gap-6 text-sm
                  transition-all duration-300">
        <a href="index.html" class="font-medium hover:text-[var(--accent)] transition-colors">Home</a>
        <a href="projects.html" class="hover:text-[var(--accent)] transition-colors">Projects</a>
        <a href="about.html" class="hover:text-[var(--accent)] transition-colors">About</a>
        <a href="contact.html" class="hover:text-[var(--accent)] transition-colors">Contact</a>
      </nav>
    `;
  }
}
customElements.define("custom-navbar", CustomNavbar);
