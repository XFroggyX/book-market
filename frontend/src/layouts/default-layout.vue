<template>
  <section>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <img src="public/img/logo2.png" class="logo" alt="">
          <router-link class="navbar-brand" :to="{name: 'Home'}">Book-swamp</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0 nav-decoration">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{name: 'Sale'}">Распродажа</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{name: 'Catalog'}">Библиотека</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{name: 'Login'}">Войти</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control mr-2" type="search" placeholder="Книга или автор" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div>
        <slot />
      </div>
    </main>
    <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3">
        © 2020 Copyright:
        <a class="text-dark" href="#">Book-mate</a>
      </div>
    </footer>
  </section>
</template>

<script>

</script>
