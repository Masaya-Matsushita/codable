<template>
  <nav>
    <div class="nav-logo">{{ logo }}</div>
    <div class="logOut-container" v-if="isLogIn">
      <button class="nav-btn" @click="alertLogOut">{{ logOut }}</button>
      <a class="nav-link" href="#" @click="alertLogOut">{{ logOut }}</a>
    </div>
    <div class="logIn-container" v-else>
      <button class="nav-btn" @click="alertLogOn">{{ logOn }}</button>
      <button class="nav-btn" @click="alertLogIn">{{ logIn }}</button>
      <a class="nav-link" href="#" @click="alertLogOn">{{ logOn }}</a>
      <a class="nav-link" href="#" @click="alertLogIn">{{ logIn }}</a>
    </div>
  </nav>
  <router-view />
</template>

<script>
import app from "@/firebase"

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import Swal from "sweetalert2"

const auth = getAuth(app)

export default {
  data() {
    return {
      logo: "CSS Gallary",
      isLogIn: false,
      logOut: "ログアウト",
      logOn: "新規登録",
      logIn: "ログイン",
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogIn = true
      } else {
        this.isLogIn = false
      }
    })
  },
  methods: {
    alertLogOn() {
      Swal.fire({
        title: "新規登録",
        html:
          '<input id="swal-input1" class="swal2-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]" placeholder="メールアドレス" style="width: 350px" >' +
          '<input id="swal-input2" class="swal2-input" pattern="^([a-zA-Z0-9]{6,})$" placeholder="パスワード(半角英数6文字以上)" style="width: 350px" >',
        showCancelButton: true,
        confirmButtonText: "go",
        preConfirm: () => {
          const email = document.getElementById("swal-input1").value
          const pw = document.getElementById("swal-input2").value
          createUserWithEmailAndPassword(auth, email, pw)
            .then((userCredential) => {
              const user = userCredential.user
              console.log(user)
              Swal.fire({
                icon: "success",
                title: "ようこそ！",
                text: "ユーザーが正常に登録されました。",
              })
              this.isLogIn = true
              this.$router.push("/")
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "登録失敗",
              })
              Swal.showValidationMessage(`Request failed: ${error.code}`)
            })
        },
      })
    },
    alertLogIn() {
      Swal.fire({
        title: "ログイン",
        html:
          '<input id="swal-input1" class="swal2-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]" placeholder="メールアドレス" style="width: 350px" >' +
          '<input id="swal-input2" class="swal2-input" pattern="^([a-zA-Z0-9]{6,})$" placeholder="パスワード(半角英数6文字以上)" style="width: 350px" >',
        showCancelButton: true,
        confirmButtonText: "go",
        preConfirm: () => {
          const email = document.getElementById("swal-input1").value
          const pw = document.getElementById("swal-input2").value
          signInWithEmailAndPassword(auth, email, pw)
            .then((userCredential) => {
              const user = userCredential.user
              console.log(user)
              Swal.fire({
                icon: "success",
                title: "おかえりなさい！",
                text: "ユーザーが正常に認証されました。",
              })
              this.isLogIn = true
              this.$router.push("/")
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "認証失敗",
              })
              Swal.showValidationMessage(`Request failed: ${error.code}`)
            })
        },
      })
    },
    alertLogOut() {
      signOut(auth)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "ログアウトしました！",
          })
          this.isLogIn = false
          this.$router.push("/")
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: error,
            footer: "contact developer : masaya.feb14@gmail.com",
          })
        })
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
  background-color: #f8f8f0;
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
  background-color: #203b5c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 2.3rem;
  color: #f8f8f0;
  margin-left: 50px;
}

.logIn-container {
  display: flex;
}

.nav-btn {
  font-size: 1.2rem;
  padding: 10px 50px;
  border-radius: 5px;
  margin-right: 80px;
  border: none;
  background-color: #597596;
  color: #303030;
}
.nav-link {
  display: none;
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 1300px) {
  .nav-btn {
    padding: 10px 40px;
    margin-right: 50px;
  }
}

@media (max-width: 1090px) {
  .nav-btn {
    display: none;
  }
  .nav-link {
    display: block;
    font-size: 1.2rem;
    margin-right: 50px;
  }
}

@media (max-width: 570px) {
  .nav-logo {
    font-size: 2rem;
    margin-left: 35px;
  }
  .nav-link {
    font-size: 1.1rem;
    margin-right: 30px;
  }
}

@media (max-width: 460px) {
  .nav-logo {
    font-size: 1.8rem;
    margin-left: 25px;
  }
  .nav-link {
    font-size: 1rem;
    margin-right: 20px;
  }
}

@media (max-width: 380px) {
  .nav-logo {
    font-size: 1.6rem;
    margin-left: 10px;
  }
  .nav-link {
    margin-right: 15px;
  }
}
</style>
