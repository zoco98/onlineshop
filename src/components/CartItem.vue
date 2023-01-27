<template>
  <div v-for="cartItem in cartItemList" :key="cartItem" class="view-cartItem">
    <span class="cartItem">
      {{ cartItem.itemName }}<br />
      &nbsp;quantity: {{ cartItem.qty }} <br />
      &nbsp;To pay: ${{ cartItem.payment }}
    </span>
    <button @click="removeItem(cartItem)" id="removeItem">Remove</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItemList: this.$store.state.cart,
    };
  },
  methods: {
    removeItem(cartItem) {
      this.$store.dispatch("removeItemfromCart", cartItem);
    },
  },
};
</script>

<style scoped>
.view-cartItem {
  width: 250px;
  height: 50px;
  position: relative;
  padding: 13px 0;
  margin: 20px;
  color: rgb(9, 26, 75);
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgb(45, 84, 158);
}
.cartItem {
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
}
#removeItem {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25%;
  font-size: 10px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid rgb(80, 240, 192);
  padding: 5px;
  color: black;
  background-color: #ffffff;
}
#removeItem:hover {
  color: #ffff;
  font-weight: bold;
  background: linear-gradient(
    to top left,
    rgb(56, 151, 214) 0%,
    rgb(80, 240, 192) 100%
  );
  box-shadow: 0 1px 7px 2px rgb(45, 84, 158);
}
</style>