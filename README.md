# Banco
<main>
  <div class="container">
    <h1 class="titulo__principal text-center my-4">CleBank</h1>
    <div class="sec__home text-center py-2">
      <h3 class="subtitulo__home">Seja bem vindo ao Sistema de genrenciamento de clientes!</h3>
    </div>
    <div class="conteudo__home text-center py-2">
      <p class="conteudo__home-funcionalidades">Este sistema foi desenvolvido como teste final da capacitação de Angular oferecido
        pela empresa Minsait. O objetivo principal deste projeto é aplicar o conhecimento adquirido durante as aulas.</p>
      <h3 class="titulo__funcionalidades py-2">Funcionalidades</h3>
      <ul class="lista__funcionalidades">
        <li class="item-lista__funcionalidades py-2"> Cadastro de clientes</li>
        <li class="item-lista__funcionalidades py-2"> Alteração de clientes</li>
        <li class="item-lista__funcionalidades py-2"> Remoção de clientes</li>
        <li class="item-lista__funcionalidades py-2"> Listagem de clientes cadastrados</li>
      </ul>
    </div>
    <div class="conteudo__home-tecnologias text-center">
      <h3 class="tecnologias-titulo">Tecnologias utilizadas</h3>
      <ul class="lista__tecnologias">
        <li class="item-lista__tecnologias py-2"> Angular CLI 15.2.5 - Framework Front-end baseada em Typescript</li>
        <li class="item-lista__tecnologias py-2"> Sweet alert 11.7.3 - Lib de alertas personalizados</li>
        <li class="item-lista__tecnologias py-2"> ngx-mask 15.1.0 - Lib de máscaras para input</li>
        <li class="item-lista__tecnologias py-2"> Visual Studio Code 1.77.3 - IDE</li>
      </ul>
    </div>
    <div class="projeto__infos text-center py-3">
      <h3 class="projeto__infos-titulo">Informações sobre o projeto</h3>
      <ul>
        <li class="item-lista__infos py-2"> Este sistema foi implementado para consumir uma API REST de gerenciamento bancário.</li>
        <li class="item-lista__infos py-2"> O código fonte está disponível no Github neste <a href="https://github.com/cleberpereiradev/banco" target="_blank">Repositório</a>.</li>
        <li class="item-lista__infos py-2"> O código fonte da API que este sistema consome está disponível no Github neste <a href="https://github.com/cleberpereiradev/api-gerenciamento-emprestimos" target="_blank">Repositório</a>.</li>
      </ul>
    </div>
    <div class="endpoints">
      <h3 class="endpoints__titulo text-center my-4">Endpoints disponíveis: </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Método</th>
            <th scope="col">Endpoint</th>
            <th scope="col">Descrição</th>
            <th scope="col">Retorno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">GET</th>
            <td>"/clientes"</td>
            <td>http://localhost:4200/clientes</td>
            <td>Mostra lista de clientes cadastrados</td>
          </tr>
          <tr>
            <th scope="row">POST</th>
            <td>/clientes</td>
            <td>http://localhost:4200/clientes</td>
            <td>Cadastrar cliente</td>
          </tr>
          <tr>
            <th scope="row">PUT</th>
            <td>/clientes/{{'cpf'}}</td>
            <td>http://localhost:4200/clientes/:cpf</td>
            <td>Editar o cliente selecionado</td>
          </tr>
          <tr>
            <th scope="row">DELETE</th>
            <td>/clientes/{{'cpf'}}</td>
            <td>http://localhost:4200/clientes/:cpf</td>
            <td>Remover o cliente selecionado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>

<br>
<br>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
