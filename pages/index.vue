<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-app
      </h1>
      <div class="links">
        <a class="button--green" target="_blank" href="/react/index.html">react</a>
        <NuxtLink  class="button--green" to="/about">about</NuxtLink>
        <NuxtLink  class="button--green" to="/cssPage/transfrom">transfrom</NuxtLink>
        <NuxtLink  class="button--green" to="/es6">ES6</NuxtLink>
        <NuxtLink  class="button--green" to="/excel">上传</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.red {
  color: red;
}
</style>
