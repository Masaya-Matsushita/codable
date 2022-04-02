<template>
  <div class="title__logo">{{ title.logo }}</div>
  <div class="title__text">{{ title.text }}</div>
  <div class="content__wrapper">
    <span class="content__title">{{ contentTitle.normal }}</span>
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
      <!-- <button class="content__record" @click="toRecord(content.text)">
        {{ recordText }}
      </button> -->
    </router-link>
  </div>
  <div class="content__wrapper">
    <span class="content__title">{{ contentTitle.extra }}</span>
    <router-link
      class="content__container"
      v-for="exContent in exContents"
      :key="exContent.index"
      :to="exContent.path"
    >
      <img
        class="content__img"
        :src="exContent.imagePath"
        :alt="exContent.imageAlt"
      />
      <p class="content__text">{{ exContent.text }}</p>
      <!-- <button class="content__record" @click="toRecord(exContent.text)">
        {{ recordText }}
      </button> -->
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        logo: "CSS Gallary",
        text: "コードを書いて例題のイメージに近づけよう！( 全12ステージ )",
      },
      contentTitle: {
        normal: "Contents Lv.1~8",
        extra: "Contents Extra",
      },
      recordText: "前回の記録",
      contents: [
        {
          imagePath: require("@/assets/LeafImg.jpg"),
          imageAlt: "レベル1「Leaf」です。",
          text: "Leaf",
          path: "/Lv1_Leaf",
        },
        {
          imagePath: require("@/assets/SylinderImg.jpg"),
          imageAlt: "レベル2「Cylinder」です。",
          text: "Cylinder",
          path: "Lv2_Cylinder",
        },
        {
          imagePath: require("@/assets/CancelButtonImg.jpg"),
          imageAlt: "レベル3「Cancel Button」です。",
          text: "Cancel Button",
          path: "Lv3_CancelButton",
        },
        {
          imagePath: require("@/assets/UnknownIconImg.jpg"),
          imageAlt: "レベル4「Unknown Icon」です。",
          text: "Unknown Icon",
          path: "Lv4_UnknownIcon",
        },
        {
          imagePath: require("@/assets/TriangleImg.jpg"),
          imageAlt: "レベル5「Triangle」です。",
          text: "Triangle",
          path: "Lv5_Triangle",
        },
        {
          imagePath: require("@/assets/InfinityImg.jpg"),
          imageAlt: "レベル6「Infinity」です。",
          text: "Infinity",
          path: "Lv6_Infinity",
        },
        {
          imagePath: require("@/assets/DiamondImg.jpg"),
          imageAlt: "レベル7「Diamond」です。",
          text: "Diamond",
          path: "Lv7_Diamond",
        },
        {
          imagePath: require("@/assets/StarImg.jpg"),
          imageAlt: "レベル8「Star」です。",
          text: "Star",
          path: "Lv8_Star",
        },
      ],
      exContents: [
        {
          imagePath: require("@/assets/MonsterBallImg.jpg"),
          imageAlt: "エクストラステージ「Monster Ball」です。",
          text: "Monster Ball",
          path: "Ex_MonsterBall",
        },
        {
          imagePath: require("@/assets/FrogImg.jpg"),
          imageAlt: "エクストラステージ「Frog」です。",
          text: "Frog",
          path: "Ex_Frog",
        },
        {
          imagePath: require("@/assets/GuitarImg.jpg"),
          imageAlt: "エクストラステージ「Guitar」です。",
          text: "Guitar",
          path: "Ex_Guitar",
        },
        {
          imagePath: require("@/assets/GiftImg.jpg"),
          imageAlt: "エクストラステージ「Gift」です。",
          text: "Gift",
          path: "Ex_Gift",
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
  margin: 80px 30px;
  letter-spacing: 0.1em;
  text-decoration: underline 4px;
  animation: logoAnimation 1.5s;
}
@keyframes subAnimation {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 0;
  }
}
.title__text {
  font-size: 1.7rem;
  margin: 0 20px 100px 20px;
  animation: subAnimation 2.3s;
}
.content__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(253, 253, 250);
  border: 1px solid #303030;
  border-radius: 5px;
  padding: 35px 0;
  margin: 50px 40px;
  position: relative;
  animation: subAnimation 2.5s;
}
.content__title {
  font-size: 2rem;
  position: absolute;
  top: -1.3rem;
  left: 3%;
  background: linear-gradient(rgb(250, 250, 240), rgb(253, 253, 250));
  padding: 0 1rem 0 1rem;
}
.content__container {
  border: 1px solid #303030;
  background-color: #fff;
  margin: 30px 30px;
  border-radius: 5px;
  opacity: 0.9;
  transition: all 0.3s;
  position: relative;
}
.content__container:hover {
  opacity: 1;
  transform: scale(1.05, 1.05);
}
.content__container * {
  color: #303030;
  text-decoration: none;
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
/* .content__record {
  text-decoration: underline;
  position: absolute;
  bottom: 4%;
  transform: translate(-50%, 0);
  border: none;
  background-color: #faffff;
  font-size: 1rem;
  color: #696969;
}
.content__record:hover {
  color: #303030;
} */
</style>
