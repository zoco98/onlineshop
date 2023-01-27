export default {
  computed: {
    calculateTotalamt: function () {
      var tamt = 0;
      this.$store.state.cart.map((cartItem) => {
        tamt += cartItem.payment;
      });
      return tamt;
    }
  }
};
