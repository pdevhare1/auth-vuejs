<template>
  <div class="absolute-center">
    <div class="logo">
      <h1>Sign Up</h1>
    </div>
    <div class="form">
      <input type="text" placeholder="Enter Your Name" v-model="name" />
      <input type="email" placeholder="Enter Your Email" v-model="email" />
      <input
        type="password"
        placeholder="Enter your Password"
        v-model="password"
      />
      <button class="btn" @click="signUp()">Sign up</button>
      <div class="Sign_in">
        <router-link class="Sign_in" to="/"
          >Already have an account? Sign In</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// export default {
//   name: "SignUp",
//   data() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     async signUp() {
//       console.log("singUp", this.name, this.email, this.password);
//       let result = await axios.post("http://localhost:3000/user", {
//         name: this.name,
//         email: this.email,
//         password: this.password,
//       });
//       if (result.status === 201) {
//         localStorage.setItem("user-info", JSON.stringify(result.data));
//         this.$router.push({
//           name: "Home",
//         });
//       }
//     },
//   },
//   mounted() {
//     const user = localStorage.getItem("user-info");
//     if (user) {
//       this.$router.push({
//         name: "Home",
//       });
//     }
//   },
// };
</script>

<style></style>
