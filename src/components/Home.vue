<template>
  <div class="main">
    <ItemsDetails />
    <CartDetails />
  </div>
</template>

<script>
import ItemsDetails from "../components/ItemsDetailsPage.vue";
import CartDetails from "../components/CartDetailsPage.vue";
export default {
  components: {
    ItemsDetails,
    CartDetails,
  },
};
</script>

<style scoped>
#home {
  background-color: rgb(222, 243, 240);
}
.main {
  display: flex;
  flex-direction: row;
}
</style>