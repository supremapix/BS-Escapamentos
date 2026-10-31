<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1DKbWoZwjtxYBhv2CXVGl7leNB-Lewbfd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build e verificação do site

Use `npm ci`, `npm run build`, `npm run lint` e `npm run test:site`.
O build gera HTML estático de todas as rotas existentes, metadados por página e
sitemap a partir de `entry-server.tsx`. A saída publicável é `dist/`.
O CSS é compilado com Tailwind local; não depende do CDN em produção.

O hero da home usa a foto local da fachada, uma composição responsiva de texto
e imagem, CTA de avaliação no WhatsApp e atalhos de serviços. Não usa vídeo de
fundo, texto animado ou elementos da identidade adiada.

`node scripts/qa-browser.js` executa testes desktop/móvel e salva capturas em
`qa/`. O script usa Chrome instalado no caminho Windows indicado; adapte
`executablePath` em outros ambientes. Ele inicia e fecha seu próprio preview.
São verificadas as larguras de 320, 390, 768 e 1440 pixels, busca de serviços,
menu, Escape, acesso por teclado ao conteúdo, carregamento da foto, links do
hero, overflow horizontal, erros de console e recursos locais, além de conteúdo
de serviço sem JavaScript. Capturas do hero: `qa/hero-{largura}.png`.

Vercel usa URLs sem extensão e redireciona a rota antiga de manutenção. Em outra
hospedagem, configure a resolução de `/rota` para `/rota.html`, o redirecionamento
de `/servicos/manutencao-automotiva` e a resposta HTTP 404 para caminhos ausentes.
Confirme HTTP, redirecionamentos e canônicos no ambiente publicado antes de
solicitar nova indexação. `llms.txt` é auxiliar e não garante uso por buscadores.

## Identidade preservada

O cliente adiou o uso da identidade enviada. Nenhum elemento dessa imagem foi
aplicado, e a transferência da referência foi encerrada. Foram preservados os
dados comerciais, contatos, imagens, favicons e a paleta azul/amarela existente.
O código original no commit `0321bd7c129f96e943d1b6e0749631d662772d09` já usava
`BS CAR CENTER` como nome exibido e `BS Escapamentos` como nome histórico/legal.
Esses nomes não foram alterados por esta atualização. O domínio canônico permanece
`https://www.bsescapamentos.com.br/`.
