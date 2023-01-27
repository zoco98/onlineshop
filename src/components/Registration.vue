<template>
  <form @submit.prevent="handleSubmit">
    <label>Name :</label>
    <input type="name" v-model="name" required />
    <div v-if="nameError" class="error">{{ nameError }}</div>

    <label>Contact Number :</label>
    <input type="tel" v-model="number" maxlength="10" required />
    <div v-if="numberError" class="error">{{ numberError }}</div>

    <div class="form-group">
      <label>Address:</label>
      <input
        type="street"
        id="autocomplete"
        class="form-control"
        placeholder="Street"
        v-model="address.street"
      />
      <div v-if="streetError" class="error">{{ streetError }}</div>
      <input
        type="city"
        class="form-control"
        id="inputCity"
        placeholder="City"
        v-model="address.city"
      />
      <div v-if="cityError" class="error">{{ cityError }}</div>

      <input
        type="zip"
        class="form-control"
        id="inputZip"
        placeholder="PinCode"
        maxlength="6"
        minlength="6"
        v-model="address.pincode"
      />
      <div v-if="pinError" class="error">{{ pinError }}</div>

      <input
        type="state"
        class="form-control"
        id="inputState"
        placeholder="State"
        v-model="address.state"
      />
      <div v-if="stateError" class="error">{{ stateError }}</div>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button id="reg">Register</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      number: null,
      address: {
        street: null,
        city: null,
        pincode: null,
        state: null,
      },
      name: null,
      terms: false,
      numberError: null,
      nameError: null,
      flag: false,
      pinError: null,
      stateError: null,
      cityError: null,
      streetError: null,
    };
  },
  methods: {
    handleSubmit() {
      var phoneno = /^[6-9]\d{9}$/;
      this.numberError = this.number.match(phoneno)
        ? ""
        : "Please enter a valid phone number";

      var nameValid = /^[a-zA-Z]{3,}/;
      this.nameError = this.name.match(nameValid)
        ? ""
        : "Please enter a valid name";
      var pinCodeVal = /^[0-9]\d{5}$/;
      this.pinError = this.address.pincode.match(pinCodeVal)
        ? ""
        : "Please enter a valid pincode";
      var streetName = /^[a-z A-Z 0-9-]*$/;
      this.streetError = this.address.street.match(streetName)
        ? ""
        : "Please enter a valid street name";
      var cityName = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
      this.cityError = this.address.city.match(cityName)
        ? ""
        : "Please enter a valid city";
      var stateName = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
      this.stateError = this.address.state.match(stateName)
        ? ""
        : "Please enter a valid state name";
      if (this.terms) {
        console.log("terms accepted: ", this.terms);
        console.log("name:", this.name);
        console.log("number:", this.number);
        console.log("flag:", this.flag);
        console.log(this.address);
      }
      if (
        this.terms &&
        this.number != null &&
        this.name != null &&
        this.address != null
      ) {
        this.flag = true;
      }
      if (this.flag === true) {
        let user = {
          number: this.number,
          address: this.address,
          name: this.name,
          terms: this.terms,
        };
        this.$store.dispatch("createUser", user);
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>


<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 45px;
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
input {
  margin: 5px 5px;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: rgb(8, 8, 8);
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  color: rgb(19, 18, 18);
  border: 1px solid rgb(70, 142, 201);
  background-color: #ffff;
  padding: 10px 20px;
  margin-top: 20px;

  border-radius: 20px;
}

#reg:hover {
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
  font-size: 0.6em;
  font-weight: bold;
}
.form-group {
  margin: 30px auto;
  width: 435px;
}

.form-control {
  float: left;
}

#inputStreet {
  width: 90%;
}

#inputCity {
  width: 38%;
}

#inputState {
  width: 33%;
}

#inputZip {
  width: 22%;
}
</style>