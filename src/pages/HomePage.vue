<template>
  <h1>Home page</h1>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HomePage",
  setup() {
    const user = reactive(localStorage.getItem("user-info"));

    try {
      if (user) {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "/" });
      }
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
