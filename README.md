# Evento futuro

Este é um projeto de convite interativo e responsivo criado para celebrar meu aniversário. A aplicação apresenta uma temática de bar e conta com um **cronômetro regressivo dinâmico** que calcula o tempo restante em dias, horas, minutos e segundos até o início do evento.

---

## Funcionalidades

* **Countdown Dinâmico:** Lógica em JavaScript que atualiza em tempo real quanto tempo falta para a festa.
* **Design Temático:** Interface personalizada com elementos visuais que remetem a um ambiente de bar/pub.
* **Arquitetura Componentizada:** Estilos organizados em SCSS utilizando a metodologia de componentes.
* **Responsividade:** Adaptado para visualização em dispositivos móveis e desktop.

---

## Tecnologias Utilizadas

* **HTML5 & CSS3:** Estrutura e semântica.
* **Sass (SCSS):** Estilização avançada com variáveis e componentes.
* **JavaScript (ES6+):** Lógica do contador regressivo e manipulação de datas (`Date`).
* **Parcel:** Empacotador (Bundler) para otimização dos arquivos e automação do build.

---

## Como rodar o projeto

1. **Clone o repositório**
    ```bash
    git clone https://github.com/nWillian1/event-page
    ```

2. **Instale as dependências** 
    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

## Como o Contador Funciona (Lógica)

O contador utiliza a classe `Date` do JavaScript para capturar a data alvo do evento. Através de um `setInterval`, a aplicação calcula a diferença entre o momento atual e a data do aniversário, convertendo os milissegundos restantes em unidades de tempo legíveis:

```javascript
// Exemplo da lógica aplicada:
// const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
// const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));