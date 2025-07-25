# HepatoBurn - Página de Vendas

Bem-vindo ao projeto HepatoBurn!

Este é um site desenvolvido em Next.js e Tailwind CSS para apresentar e vender o suplemento HepatoBurn, focado em saúde do fígado e emagrecimento saudável. O projeto inclui página VSL, depoimentos de clientes, ofertas especiais, captura de UTMs e página de obrigado.

## Sobre o Produto

**HepatoBurn** é o único suplemento no mundo com o exclusivo Complexo de Purificação e Queima de Gordura do Fígado, combinando plantas mediterrâneas e super nutrientes para otimizar rapidamente a função hepática. Ao desintoxicar seu corpo e otimizar o funcionamento do fígado, você acelera o metabolismo, aumenta a queima de calorias e coloca seu corpo em modo de queima máxima de gordura!

### Benefícios Esperados
- Mais energia
- Pele mais saudável
- Sono melhor
- Menos fome
- Mente mais clara
- Suporte à saúde ideal

## Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd hepatoburn
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Acesse no navegador:**
   [http://localhost:3000](http://localhost:3000)

## Deploy em Produção

O projeto está disponível publicamente em:

👉 [https://hepatoburn-iota.vercel.app](https://hepatoburn-iota.vercel.app)

## Estrutura do Projeto
- `src/app` - Páginas principais do site
- `src/components` - Componentes reutilizáveis (botão CTA, vídeo, etc)
- `src/pages/Products` - Página de produtos e ofertas
- `src/assets/img` - Imagens do produto

## Tecnologias Utilizadas
- Next.js
- Tailwind CSS
- React

## Observações Técnicas
- Layout responsivo e otimizado para conversão
- Captura e repasse de parâmetros UTM
- Página de obrigado personalizada
- Métricas de performance otimizadas (Lighthouse)

## Decisões Técnicas
- Utilização do Next.js para SSR/SSG, garantindo performance e SEO.
- Tailwind CSS para estilização rápida, responsiva e consistente.
- Componentização para facilitar manutenção e reuso (ex: botão CTA, cards de depoimento, vídeo).
- Captura e repasse de UTMs via query string para rastreamento de campanhas.
- Estrutura de pastas organizada para escalabilidade.

## Estratégias de Otimização Implementadas
- Imagens otimizadas com o componente `next/image`.
- Layout responsivo usando Tailwind CSS.
- Utilização de Suspense para carregamento de dados client-side.
- Minimização de JavaScript e CSS no build de produção.
- Uso de links internos para navegação rápida sem reload.

## Métricas do Lighthouse
O projeto foi avaliado com o Lighthouse e obteve os seguintes resultados:

- **Performance:** 92
- **Acessibilidade:** 94
- **Boas Práticas:** 78
- **SEO:** 100

<img src="./src/assets/img/lighthouse-metrics.png" alt="Lighthouse Metrics" width="400" />

## Licença
Este projeto é apenas para fins demonstrativos e não representa uma oferta real de produto.
