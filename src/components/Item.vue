<template>
  <div class="item">
    <input type="text" v-model="search" placeholder="search with food name" />
    <div v-for="item in filteredItemList" :key="item" class="view-item">
      <h3>{{ item.itemName }}</h3>
      <p>Item price: ${{ item.price }}</p>
      <br /><br />
      <button class="view-product" @click="showProductdetails(item)">
        View Product</button
      >&nbsp;
      <button class="add-product" @click="addToCart(item)">Add to Cart</button
      >&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: this.$store.state.itemList,
      search: "",
    };
  },
  methods: {
    showProductdetails(item) {
      this.$emit("showproductdetaildrawer", item);
    },
    addToCart(item) {
      this.$store.dispatch("addItemtoCart", item);
    },
  },
  computed: {
    filteredItemList: function () {
      return this.itemList.filter((searchItem) => {
        return searchItem.itemName
          .toLowerCase()
          .match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 80em;
  border-radius: 5px;
  box-shadow: 3px 1px 5px 0 grey;
}
.item {
  display: flex;
  flex-wrap: wrap;
}
.view-item {
  width: 200px;
  padding: 15px;
  margin: 20px;
  color: rgb(9, 26, 75);
  text-align: left;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 grey;
}
.view-product,
.add-product {
  color: black;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgb(80, 240, 192);
  padding: 5px;
  background-color: #ffffff;
}
.view-product:hover,
.add-product:hover {
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