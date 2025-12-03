class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="mt-20 pb-6 flex justify-center">
        <div class="glass-footer px-6 py-3 rounded-2xl text-center text-sm shadow-lg">
          <p class="text-[var(--muted)]">
            © ${new Date().getFullYear()} Cid Kageno — PurpleGlass
          </p>
        </div>
      </footer>
    `;
  }
}
customElements.define("custom-footer", CustomFooter);
