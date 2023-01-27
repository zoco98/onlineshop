import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
    cart: [],
    totalqty: 0,
    totalamt: 0,
    itemList: [
      {
        id: 1,
        itemName: "Chicken MOMO",
        price: 10,
        itemDescription:
          "Chicken Momos are a type of Tibetan/Nepali dumpling dish ."
      },
      {
        id: 2,
        itemName: "Ramen",
        price: 20,
        itemDescription:
          "Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles."
      },
      {
        id: 3,
        itemName: "Burger",
        price: 15,
        itemDescription:
          "Burger is a sandwich consisting of one or more cooked patties, placed inside a sliced bread roll or bun."
      },
      {
        id: 4,
        itemName: "French Fries",
        price: 10,
        itemDescription: "It is savoury item best combined with burger."
      },
      {
        id: 5,
        itemName: "Egg-roll",
        price: 5,
        itemDescription:
          "Egg-roll is one of the most favourite street foods in India."
      },
      {
        id: 6,
        itemName: "Pudding",
        price: 12,
        itemDescription: "Pudding is sweet dish.Best dessert ever."
      }
    ]
  },
  getters: {},
  mutations: {
    createUser(state, user) {
      state.user = { user };
      console.log(state.user);
    },

    addToCart(state, product) {
      let item = product;
      item = { ...item, qty: 1, payment: item.price };
      if (state.cart.length > 0) {
        let sameItem = state.cart.find((i) => i.id === item.id);
        if (sameItem) {
          let index = state.cart.findIndex((el) => el.id === item.id);
          state.cart[index]["qty"] += 1;
          state.cart[index]["payment"] =
            state.cart[index]["qty"] * state.cart[index]["price"];
          console.log(sameItem);
        } else {
          state.cart.push(item);
        }
      } else {
        state.cart.push(item);
      }
      state.totalqty += 1;
    },
    removeItem(state, product) {
      let sameItem = state.cart.find((i) => i.id === product.id);
      if (sameItem) {
        let index = state.cart.findIndex((el) => el.id === product.id);
        if (state.cart[index]["qty"] > 1) {
          state.cart[index]["qty"] -= 1;
          state.cart[index]["payment"] =
            state.cart[index]["qty"] * state.cart[index]["price"];
        } else {
          state.cart.splice(index, 1);
        }

        console.log(sameItem);
      }
      state.totalqty -= 1;
    },
    logout(state) {
      for (const cartItem in state.cart) {
        state.cart.splice(cartItem, state.cart.length);
        state.user = {};
        state.totalqty = 0;
      }
    }
  },
  actions: {
    addItemtoCart(context, product) {
      context.commit("addToCart", product);
    },
    removeItemfromCart(context, product) {
      context.commit("removeItem", product);
    },
    logout(context) {
      context.commit("logout");
    },
    createUser(context, user) {
      context.commit("createUser", user);
    }
  }
});
