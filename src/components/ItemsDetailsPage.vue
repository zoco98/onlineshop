<template>
  <div v-if="showProduct" class="drawer" @click.self="closeModal()">
    <ItemDescriptionDrawer :product="product" />
  </div>
  <div class="item-detail">
    <Item @showproductdetaildrawer="showDetailDrawer($event)" />
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import ItemDescriptionDrawer from "../components/ItemDescriptionDrawer.vue";
export default {
  data() {
    return {
      product: [],
      showProduct: false,
    };
  },
  components: {
    Item,
    ItemDescriptionDrawer,
  },
  methods: {
    showDetailDrawer(item) {
      this.product = item;
      this.showProduct = true;
    },
    closeModal() {
      this.showProduct = false;
    },
  },
};
</script>

<style scoped>
.drawer {
  width: 100%;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(180, 180, 180, 0.3);
}
</style>