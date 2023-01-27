<template>
  <form @submit.prevent="handleOrder()">
    <label>Your total amount is : ${{ calculateTotalamt }}</label>
    <br />
    <label>Card Number:</label>
    <input
      type="text"
      v-model="cardno"
      required
      maxlength="16"
      minlength="11"
    />

    <label>CVV Number:</label>
    <input
      type="password"
      v-model="cvvno"
      required
      maxlength="3"
      minlength="3"
    />

    <div class="submit" @click="validate()">
      <button id="checkout">Pay and Place order</button>
    </div>
  </form>
</template>

<script>
import totalOrderAmountMixin from "../totalOrderAmountMixin.js";
export default {
  data() {
    return {
      cardno: null,
      cvvno: null,
      valid: false,
    };
  },
  methods: {
    handleOrder() {
      if (this.valid === true) {
        this.$router.push({ name: "ordersuccess" });
      }
    },
    validate() {
      let validCardNo = /^4[0-9]{5}/gi;
      console.log(!isNaN(this.cvvno));
      if (this.cardno.match(validCardNo) && !isNaN(this.cvvno)) {
        this.valid = true;
      }
    },
  },
  mixins: [totalOrderAmountMixin],
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
#checkout:hover {
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
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>