<template>
  <input type="range" min="0" max="1" step="0.01" v-model="updateOpaValue" />
</template>

<script>
export default {
  props: ["passOpaValue"],
  emits: ["returnOpaValue"],
  computed: {
    updateOpaValue: {
      get() {
        return this.passOpaValue
      },
      set(value) {
        this.$emit("returnOpaValue", value)
      },
    },
  },
}
</script>
