class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="mt-20 pb-6 flex justify-center">
        <div class="px-6 py-3 rounded-2xl 
                    backdrop-blur-lg bg-white/20 dark:bg-black/20
                    border border-white/25 dark:border-white/10
                    text-center text-sm text-gray-400 dark:text-gray-500
                    shadow-lg transition-all duration-300">
          © ${new Date().getFullYear()} Cid Kageno — PurpleGlass
        </div>
      </footer>
    `;
  }
}
customElements.define("custom-footer", CustomFooter);
