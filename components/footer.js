class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="mt-20 pb-6 flex justify-center">
        <div class="px-6 py-3 rounded-2xl 
                    backdrop-blur-lg bg-white/20 dark:bg-black/20 
                    border border-white/25 dark:border-white/10
                    text-center text-sm shadow-lg transition-all duration-300">
          <p class="text-gray-400 dark:text-gray-500">
            © ${new Date().getFullYear()} Cid Kageno — PurpleGlass
          </p>
        </div>
      </footer>
    `;
  }
}
customElements.define("custom-footer", CustomFooter);
