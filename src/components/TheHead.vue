<template>
  <div class="header">
    <img src="../assets/burger.jpg" />
    <h2>Foody~Mamma</h2>
  </div>
</template>

<script>
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  text-align: left;
  color: #ffff;
  background: linear-gradient(
    to top,
    rgb(56, 151, 214) 0%,
    rgb(80, 240, 192) 100%
  );
  box-shadow: 0 10px 20px 2px rgb(45, 84, 158);
}
img {
  position: absolute;
  top: 23px;
  left: 215px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.header h2 {
  padding-left: 5px;
  font-family: "Bookman", "URW Bookman L", "serif";
}
</style>
