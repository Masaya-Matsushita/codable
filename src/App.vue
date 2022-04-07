<template>
  <nav>
    <div class="logo">{{ logo }}</div>
    <button class="logIn-btn" @click="alertLogIn">{{ logIn }}</button>
  </nav>
  <router-view />
</template>

<script>
import app from "@/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Swal from "sweetalert2"

const auth = getAuth(app)

export default {
  data() {
    return {
      logo: "CSS Gallary",
      logIn: "まずはログイン",
    }
  },
  methods: {
    async alertLogIn() {
      Swal.fire({
        title: "ログイン",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="メールアドレス" style="width: 300px;">' +
          '<input id="swal-input2" class="swal2-input" placeholder="パスワード" style="width: 300px;">',
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
                title: "作成失敗",
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
