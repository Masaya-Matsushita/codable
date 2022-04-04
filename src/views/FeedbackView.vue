<template>
  <RecordLayout
    :setTitle="title"
    :setContentTitle="contentTitle"
    :setStage="this.$route.query.stage"
  />
</template>

<script>
import RecordLayout from "@/components/RecordLayout.vue"

export default {
  components: {
    RecordLayout,
  },
  data() {
    return {
      title: {
        logo: "お疲れさまでした！",
        text: "他のステージにも挑戦してみてね！",
      },
      contentTitle: "今回の記録",
    }
  },
}
</script>
