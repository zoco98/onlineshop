<template>
  <h1>Your Order is Successful!</h1>
  <img src="../assets/success.png" />
  <div id="order_success">
    <h4>Payment of ${{ calculateTotalamt }} is succesfully recieved!</h4>
  </div>
  <div id="delivery_details">
    <p>Following are the details of {{ userName }}'s Order:</p>
    <h5>Order ID : {{ randomNumber }}</h5>
    <h5>Item &nbsp;&nbsp;|&nbsp;&nbsp; Quantity</h5>
    <hr />
    <div v-for="cartItem in cartItemList" :key="cartItem">
      {{ cartItem.itemName }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ cartItem.qty }}
    </div>
  </div>
  <div class="submit" @click="emptyCartandUser()">
    <button id="logout">Logout</button>
  </div>
</template>

<script>
import totalOrderAmountMixin from "../totalOrderAmountMixin.js";
import userDetailMixin from "../userDetailsMixin.js";
export default {
  data() {
    return {
      //randomNumber: " ",
      cartItemList: this.$store.state.cart,
    };
  },
  computed: {
    randomNumber: () => {
      return Math.floor(Math.random() * 10000000000000).toString();
    },
  },
  methods: {
    emptyCartandUser() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    },
  },
  mixins: [totalOrderAmountMixin, userDetailMixin],
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(8, 36, 77);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  color: rgb(19, 18, 18);
  border: 1px solid rgb(70, 142, 201);
  background-color: #ffff;

  padding: 10px 20px;
  margin-top: 20px;

  border-radius: 20px;
}
#logout:hover {
  color: #ffff;
  font-weight: bold;
  background: linear-gradient(
    to top left,
    rgb(56, 151, 214) 0%,
    rgb(80, 240, 192) 100%
  );
  box-shadow: 0 1px 7px 2px rgb(45, 84, 158);
}
.submit {
  text-align: center;
}

h1 {
  border: 1px solid #D8D8D8;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial;
  font-size: 20px;
  background-color: rgb(236, 255, 216);
  color: green;
  text-align: center;
  margin-top: 30px;
}
</style>