<template>
  <div class="absolute-center">
    <div class="logo">
      <h1 class="text-black">Sign In</h1>
    </div>
    <div class="form">
      <input
        type="email"
        placeholder="Enter Your Email"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Enter your Password"
        v-model="password"
        required
      />
      <button class="btn" @click="SingIn">Sign In</button>
      <div class="Sign_in">
        <router-link class="Sign_in" to="/signup"> Sign Up </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mitt from "mitt";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    SingIn() {
      const user = {
        email: this.email,
        password: this.password,
        auth_token: "abcd1234",
        timeout: "30s",
      };
      localStorage.setItem("user-info", JSON.stringify(user));
      this.$router.push({
        path: "/home",
      });
      this.startTimeout();
    },
    startTimeout() {
      const timeout = setTimeout(() => {
        localStorage.clear();
        this.$router.push({
          path: "/",
        });
      }, 30000);

      const events = mitt();
      events.on("user-active", () => {
        clearTimeout(timeout);
      });
      events.start();
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({
        path: "/home",
      });
    } else {
      this.$router.push({
        path: "/",
      });
    }
  },
};
</script>

<style></style>
