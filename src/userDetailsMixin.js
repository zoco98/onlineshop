export default {
  data() {
    return {
      userDetail: this.$store.state.user
    };
  },
  computed: {
    userName: function () {
      for (const index in this.userDetail) {
        return (this.userName = this.userDetail[index].name);
      }
    }
  },
  methods: {
    proceedToCheckout(qty) {
      let flag = false;
      for (const key in this.userDetail) {
        if (qty >= 1 && this.userDetail[key] != null) {
          this.$router.push({ name: "checkout" });
          flag = true;
        }
      }
      if (qty >= 1 && flag === false) {
        alert("Please register yourself");
        this.$router.push({ name: "registration" });
      }
    }
  }
};
