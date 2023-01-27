<template>
  <TheHead />
  <div class="navigation">
    <img src="./assets/burger.jpg" />
    <hr />
    <router-link class="homeItem" to="/">Home</router-link>
    &nbsp;|&nbsp;
    <router-link class="reg" to="/registration">Register</router-link>
    <hr />
  </div>
  <div id="home">
    <router-view />
  </div>
</template>

<script>
import TheHead from "./components/TheHead.vue";
export default {
  name: "App",
  components: {
    TheHead,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 80px;
  text-align: center;
}
.reg,
.homeItem {
  display: inline;
  list-style-type: none;
  text-decoration: none;
  color: rgb(8, 124, 114);
}
hr {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid rgb(29, 223, 164);
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 1px 10px 2px rgb(45, 84, 158);
}
.active-link {
  color: rgb(39, 36, 209);
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
}
.active-link-exact {
  color: rgb(33, 165, 136);
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
}
#home {
  padding: 10px;
  background-color: rgb(222, 243, 240);
}
</style>
