<template>
  <nav>
    <div class="nav-logo">{{ logo }}</div>
    <div class="btn-container">
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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import Swal from "sweetalert2"

const auth = getAuth(app)

export default {
  data() {
    return {
      logo: "CSS Gallary",
      logOn: "新規作成",
      logIn: "ログイン",
    }
  },
  methods: {
    alertLogOn() {
      Swal.fire({
        title: "新規作成",
        html:
          // FirebaseHostingでデプロイしたら何故かstyleが効かなくなった
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
            })
            .catch((error) => {
              console.log(error.code)
              console.log(error.message)
              Swal.fire({
                icon: "error",
                title: "作成失敗",
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
            })
            .catch((error) => {
              console.log(error.code)
              console.log(error.message)
              Swal.fire({
                icon: "error",
                title: "認証失敗",
              })
              Swal.showValidationMessage(`Request failed: ${error.code}`)
            })
        },
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

.btn-container {
  display: flex;
}

.nav-btn {
  font-size: 1.1rem;
  padding: 10px 40px;
  border-radius: 5px;
  margin-right: 50px;
  border: none;
  background-color: #44668ecc;
  color: #303030;
}
.nav-link {
  display: none;
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 770px) {
  .nav-logo {
    font-size: 2rem;
    margin-left: 40px;
  }

  .nav-btn {
    padding: 8px 30px;
    margin-right: 30px;
  }
}

@media (max-width: 600px) {
  .nav-logo {
    font-size: 1.7rem;
    margin-left: 30px;
  }

  .nav-btn {
    padding: 7px 25px;
    margin-right: 20px;
  }
}

@media (max-width: 520px) {
  .nav-btn {
    padding: 5px 15px;
    margin-right: 20px;
  }
}

@media (max-width: 460px) {
  .nav-btn {
    display: none;
  }
  .nav-link {
    display: block;
    padding-right: 30px;
  }
}

@media (max-width: 410px) {
  .nav-link {
    padding-right: 15px;
  }
}

@media (max-width: 370px) {
  .nav-logo {
    font-size: 1.4rem;
    margin-left: 10px;
  }
}

@media (max-width: 340px) {
  .nav-link {
    padding-right: 10px;
    font-size: 0.8rem;
  }
}
</style>
