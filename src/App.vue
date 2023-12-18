<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/create">Create</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  --color-grey: rgba(148, 148, 148, 1);
  --color-dark: rgba(44, 62, 80, 1);
  --color-blu: rgba(123, 97, 255, 0.5);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-dark);
  background-color: rgba(123, 97, 255, 0.1);
  height: 100vh;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--color-dark);
}

nav a.router-link-exact-active {
  color: rgba(123, 97, 255, 0.8);
}
</style>
