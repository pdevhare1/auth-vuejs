<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
.App {
  text-align: center;
}
.logo {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
}

.logo h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: -1rem;
}
.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem;
  align-items: center;
}

.form input {
  border-radius: 10px;
  outline: 2px solid #000000;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  margin-bottom: 1.5rem;
}

.form input:focus {
  outline-offset: 5px;
  background-color: #fff;
}

.form input:hover {
  border-color: black;
}

.btn {
  --c: #912222;
  /* the color*/

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
}

.btn:hover {
  --_p: 100%;
  transition: background-position 0.4s, background-size 0s;
}

.btn:active {
  box-shadow: 0 0 9e9Q inset #0009;
  background-color: var(--c);
  color: #fff;
}

.btn {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  cursor: pointer;
  padding: 0.1em 0.6em;
  font-weight: bold;
  border: none;
}
.Sign_in {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #b30303;
  text-decoration: none;
}
</style>
