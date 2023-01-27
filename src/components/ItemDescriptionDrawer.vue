<template>
  <div class="item-description-Drawer">
    <h3>{{ product.itemName }}</h3>
    <p>{{ product.itemDescription }}</p>
    <h5>Price: ${{ product.price }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    product: Array,
  },
};
</script>

<style>
.item-description-Drawer {
  width: 300px;
  height: 150px;
  position: absolute;
  top: 30%;
  left: 30%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 grey;
  background-color: #fefefe;
  text-align: center;
}
</style>