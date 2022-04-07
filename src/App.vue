<template>
  <nav>
    <div class="logo">{{ logo }}</div>
    <button class="logIn-btn" @click="toLogIn">{{ logIn }}</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      logo: "CSS Gallary",
      logIn: "まずはログイン",
    }
  },
  methods: {
    toLogIn() {
      this.$router.push("/log-in")
    },
  },
}
</script>

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
  background-color: #fafaf0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}

nav {
  height: 80px;
  background-color: rgb(32, 59, 92);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 2.3rem;
  color: #fafaf0;
  margin-left: 50px;
}

.logIn-btn {
  font-size: 1rem;
  padding: 10px 30px;
  border-radius: 5px;
  margin-right: 50px;
}

@media (max-width: 800px) {
  .logo {
    font-size: 2rem;
    color: #fafaf0;
    margin-left: 40px;
  }

  .logIn-btn {
    padding: 8px 25px;
  }
}

@media (max-width: 600px) {
  .logo {
    font-size: 1.7rem;
    color: #fafaf0;
    margin-left: 30px;
  }

  .logIn-btn {
    font-size: 0.9rem;
    padding: 7px 20px;
    margin-right: 35px;
  }
}

@media (max-width: 450px) {
  .logo {
    font-size: 1.6rem;
    color: #fafaf0;
    margin-left: 20px;
  }

  .logIn-btn {
    padding: 5px 15px;
    margin-right: 20px;
  }
}

@media (max-width: 350px) {
  .logo {
    font-size: 1.4rem;
    color: #fafaf0;
    margin-left: 10px;
  }

  .logIn-btn {
    padding: 5px 10px;
    margin-right: 10px;
  }
}
</style>
