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
        logo: "前回の記録",
        text: "エディタで書き変えられます。(保存はされません)",
      },
      contentTitle: "前回の記録",
    }
  },
}
</script>
