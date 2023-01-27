<template>
  <div class="cart-detail">
    <div class="head">
      <h3>My Cart</h3>
      <h5>Total Item: {{ $store.state.totalqty }}</h5>
    </div>
    <CartItem />
    <hr />
    <p>Total amount to pay: ${{ calculateTotalamt }}</p>
    <span>
      <button id="signup" @click="proceedToCheckout($store.state.totalqty)">
        Checkout
      </button>
    </span>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import totalOrderAmountMixin from "../totalOrderAmountMixin.js";
import userDetailMixin from "../userDetailsMixin.js";
export default {
  components: {
    CartItem,
  },
  mixins: [totalOrderAmountMixin, userDetailMixin],
};
</script>

<style scoped>
.cart-detail {
  width: 50%;
  position: relative;
  top: 0;
  padding: 20px;
  text-align: center;
  border-left: 1px solid rgb(45, 84, 158);
  box-shadow: 0 10px 20px 2px rgb(45, 84, 158);
  background: linear-gradient(to top right, #ffff 0%, rgb(83, 223, 192) 100%);
}
.head h3 {
  color: rgb(9, 26, 75);
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
  font-family: "Bookman", "URW Bookman L", "serif";
}
#signup {
  width: 70%;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid rgb(80, 240, 192);
  padding: 5px;
  font-size: 15px;
  color: black;
  background-color: #ffffff;
}
#signup:hover {
  color: #ffff;
  font-weight: bold;
  background: linear-gradient(
    to top left,
    rgb(56, 151, 214) 0%,
    rgb(80, 240, 192) 100%
  );
  box-shadow: 0 5px 10px 2px rgb(45, 84, 158);
}
</style>