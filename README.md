# 🛍️ Digital Store - Frontend E-commerce

Este projeto é um frontend de uma loja virtual desenvolvido com React. Ele foi criado como parte do **curso de Desenvolvimento Web da Geração Tech**, com foco na aplicação prática de conceitos de frontend, exibição de produtos, filtragem, ordenação e uma experiência detalhada de visualização de produto.

## ✨ Funcionalidades Principais

* **Página de Listagem de Produtos (`/products`)**:
    * Exibe uma lista de produtos obtidos através da [DummyJSON API](https://dummyjson.com/).
    * **Filtragem por Marca**: Permite aos usuários filtrar produtos por marcas disponíveis.
    * **Filtragem por Tamanho**: Oferece opções de filtro por tamanho (Pequeno, Médio, Grande, Extra Grande).
    * **Ordenação**: Possibilidade de ordenar os produtos (e.g., por preço, popularidade).
    * Exibição do total de produtos encontrados.

* **Página de Visualização do Produto (`/products/:id`)**:
    * Exibe os detalhes de um produto específico com base no seu ID.
    * **Galeria de Imagens**: Permite visualizar múltiplas imagens do produto em uma galeria interativa.
    * **Buy Box**: Seção destacada com informações cruciais para a compra:
        * Nome do Produto, Referência (SKU).
        * Avaliações em estrelas e número total de avaliações.
        * Preço original e preço com desconto (quando aplicável).
        * Descrição detalhada do produto.
        * Opções de produto (`ProductOptions`) para cores e tamanhos, permitindo a seleção visual.
        * Botão "COMPRAR" para adicionar o produto ao carrinho (funcionalidade futura).
    * **Produtos Relacionados**: Exibe uma seção de produtos da mesma categoria, excluindo o produto atual.
    * **Produtos Recomendados**: Apresenta uma curadoria de produtos recomendados, com um link "Ver todos" para a página de listagem.

* **Componentes Reutilizáveis**:
    * **`<Header />` e `<Footer />`**: Estrutura básica de navegação e rodapé da aplicação.
    * **`<Layout />`**: Componente de layout principal para envolver as páginas.
    * **`<ProductCard />`**: Componente individual para exibir informações de um produto na listagem e seções de recomendação.
    * **`<Section />`**: Componente genérico para criar seções de conteúdo com título e link "Ver todos".
    * **`<Gallery />`**: Componente de galeria de imagens personalizável.
    * **`<ProductOptions />`**: Componente para listar e selecionar variações de produto (tamanhos, cores).
    * **`<BuyBox />`**: Componente para encapsular as informações de compra e opções de produto.

## 🛠️ Tecnologias Utilizadas

* **React**: Biblioteca JavaScript para construção de interfaces de usuário.
* **React Router DOM**: Para roteamento declarativo no React.
* **HTML & CSS (com inline styles)**: Para estruturação e estilização dos componentes.
* **DummyJSON API**: Utilizada como fonte de dados para os produtos.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/evelynnnie/Digital-Store_Projeto-FrontEnd.git
    ```
    *Este comando irá criar uma pasta chamada `Digital-Store_Projeto-FrontEnd` no seu diretório atual.*

2.  **Acesse a pasta do projeto:**
    ```bash
    cd Digital-Store_Projeto-FrontEnd
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  O aplicativo estará disponível em `http://localhost:5173` (ou outra porta indicada pelo seu terminal).          

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---
Feito com ❤️ por [Daiane Araújo/evelynnnie] como projeto do curso de Desenvolvimento Web da Geração Tech.
