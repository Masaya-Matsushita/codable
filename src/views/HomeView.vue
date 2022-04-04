<template>
  <div class="title__logo">{{ title.logo }}</div>
  <div class="title__text">{{ title.text }}</div>
  <div class="content__wrapper">
    <span class="content__title">{{ contentTitle }}</span>
    <router-link
      class="content__container"
      v-for="content in contents"
      :key="content.index"
      :to="content.path"
    >
      <img
        class="content__img"
        :src="content.imagePath"
        :alt="content.imageAlt"
      />
      <p class="content__text">{{ content.text }}</p>
      <button class="content__record" @click="toRecord(content.docName)">
        {{ recordText }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        logo: "CSS Gallary",
        text: "コードを書いて例題のイメージに近づけよう！( 全8ステージ )",
      },
      contentTitle: "Contents Lv.1~8",
      recordText: "前回の記録",
      contents: [
        {
          imagePath: require("@/assets/LeafImg.jpg"),
          imageAlt: "レベル1「Leaf」です。",
          text: "Leaf",
          path: "Lv1_Leaf",
          docName: "Lv.1 Leaf",
        },
        {
          imagePath: require("@/assets/SylinderImg.jpg"),
          imageAlt: "レベル2「Cylinder」です。",
          text: "Cylinder",
          path: "Lv2_Cylinder",
          docName: "Lv2. Cylinder",
        },
        {
          imagePath: require("@/assets/CancelButtonImg.jpg"),
          imageAlt: "レベル3「Cancel Button」です。",
          text: "Cancel Button",
          path: "Lv3_CancelButton",
          docName: "Lv.3 Cancel Button",
        },
        {
          imagePath: require("@/assets/UnknownIconImg.jpg"),
          imageAlt: "レベル4「Unknown Icon」です。",
          text: "Unknown Icon",
          path: "Lv4_UnknownIcon",
          docName: "Lv.4 Unknown Icon",
        },
        {
          imagePath: require("@/assets/TriangleImg.jpg"),
          imageAlt: "レベル5「Triangle」です。",
          text: "Triangle",
          path: "Lv5_Triangle",
          docName: "Lv.5 Triangle",
        },
        {
          imagePath: require("@/assets/InfinityImg.jpg"),
          imageAlt: "レベル6「Infinity」です。",
          text: "Infinity",
          path: "Lv6_Infinity",
          docName: "Lv.6 Infinity",
        },
        {
          imagePath: require("@/assets/DiamondImg.jpg"),
          imageAlt: "レベル7「Diamond」です。",
          text: "Diamond",
          path: "Lv7_Diamond",
          docName: "Lv7 Diamond",
        },
        {
          imagePath: require("@/assets/StarImg.jpg"),
          imageAlt: "レベル8「Star」です。",
          text: "Star",
          path: "Lv8_Star",
          docName: "Lv.8 Star",
        },
      ],
    }
  },
}
</script>

<style scoped>
@keyframes logoAnimation {
  0% {
    letter-spacing: 0.2em;
    opacity: 0;
  }
}
.title__logo {
  font-size: 5rem;
  margin: 80px auto;
  letter-spacing: 0.1em;
  text-decoration: underline 4px;
  white-space: nowrap;
  animation: logoAnimation 1.5s;
}
/* @keyframes subAnimation {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 0;
  }
} */
.title__text {
  font-size: 1.7rem;
  margin-bottom: 100px;
  /* animation: subAnimation 2.3s; */
}
.content__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(253, 253, 250);
  border: 1px solid #303030;
  border-radius: 10px;
  margin: 50px 40px;
  padding: 35px 0;
  position: relative;
  /* animation: subAnimation 2.5s; */
}
.content__wrapper * {
  text-decoration: none;
  color: #303030;
}
.content__title {
  font-size: 2rem;
  position: absolute;
  top: -18px;
  left: 3%;
  background: linear-gradient(rgb(250, 250, 240), rgb(253, 253, 250));
  padding: 0 1rem;
}
.content__container {
  border: 1px solid #303030;
  background-color: #fff;
  margin: 30px;
  border-radius: 5px;
  opacity: 0.9;
  transition: all 0.3s;
  position: relative;
}
.content__container:hover {
  opacity: 1;
  transform: scale(1.05, 1.05);
}

.content__img {
  border: 1px solid #303030;
  border-radius: 5px;
  margin: 5px 5px 0 5px;
  width: 250px;
}
.content__text {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  padding: 20px 0 60px 0;
}
.content__record {
  position: absolute;
  bottom: 4%;
  transform: translate(-50%, 0);
  border: none;
  text-decoration: underline;
  font-size: 1rem;
  color: #696969;
  background-color: #fff;
}
.content__record:hover {
  color: #303030;
}

@media screen and (max-width: 610px) {
  .title__logo {
    font-size: 4rem;
  }
  .title__text {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 540px) {
  .title__logo {
    font-size: 3rem;
    margin: 50px auto;
  }
  .title__text {
    font-size: 1.3rem;
    margin-bottom: 70px;
  }
  .content__wrapper {
    margin: 50px 25px;
  }
}

@media screen and (max-width: 415px) {
  .title__logo {
    font-size: 2.5rem;
    margin: 40px auto;
  }
  .title__text {
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
  .content__wrapper {
    margin: 50px 20px;
  }
  .content__title {
    font-size: 1.5rem;
  }
}
</style>
