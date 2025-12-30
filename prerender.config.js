module.exports = {
  // Configuração para pré-renderização (Exemplo)
  // Requer configuração adicional no pipeline de build (vite-plugin-ssr, react-snap, etc.)
  staticDir: 'dist',
  routes: [
    '/',
    '/sobre',
    '/servicos',
    '/areas',
    '/contato',
    // Rotas dinâmicas devem ser listadas aqui se usar react-snap
  ],
  postProcess(renderedRoute) {
    renderedRoute.html = renderedRoute.html.replace(
      'id="root"',
      'id="root" class="prerendered"'
    );
    return renderedRoute;
  }
};