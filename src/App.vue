<template>
  <nav><router-link to="/">Home</router-link></nav>
  <router-view />
</template>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: rgb(250, 250, 240);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}

nav {
  padding: 30px;
  background-color: rgb(25, 50, 80);
}

nav a {
  font-weight: bold;
  color: #303030;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
