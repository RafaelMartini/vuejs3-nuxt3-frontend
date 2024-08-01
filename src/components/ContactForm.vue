<template>
    <div class="contact-form">
      <h2 class="title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" />
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="exemplo@mail.com.br" />
          </div>
          <div class="form-group">
            <label for="phone">Celular</label>
            <input type="tel" id="phone" placeholder="(00) 00000-0000" />
          </div>
          <div class="form-group">
            <label for="contact">Como prefere ser contatado?</label>
            <select id="contact">
              <option>Selecione a melhor opção</option>
              <option>Email</option>
              <option>Telefone</option>
            </select>
          </div>
        </div>
        <div class="form-row radio-group">
          <div>
            <input type="radio" id="option1" name="contact-preference" />
            <label for="option1">Lorem ipsum is simply dummy</label>
          </div>
          <div>
            <input type="radio" id="option2" name="contact-preference" />
            <label for="option2">Lorem ipsum is simply dummy</label>
          </div>
          <button type="submit" class="submit-button">Enviar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/styles/contactForm.scss';
  
  export default defineComponent({
    name: 'ContactForm',
  });
  </script>
  