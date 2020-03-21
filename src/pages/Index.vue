<template>
  <q-list>
    <q-item clickable v-ripple v-for="pet in pets" @click="show(pet)" v-if="!store.onlyFavorites || utils.isFavorite(pet)">
      <q-item-section avatar>
        <q-avatar rounded size="100px">
          <q-img
            :src="`statics/images/${pet.id}1.jpg`"
            :ratio="1"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section top>
        <div class="text-h6">{{pet.name}}</div>
        <div>{{utils.age(pet)}}</div>
        <div>{{utils.sex(pet)}}</div>
      </q-item-section>
      <q-item-section side>

        <q-badge color="secondary" v-if="pet.left_behind">
          נשארו מאחור
        </q-badge>
        <q-btn flat round icon="favorite_border" color="brown" v-if="!utils.isFavorite(pet)" @click.stop="favorite(pet)"></q-btn>
        <q-btn flat round icon="favorite" color="red" v-if="utils.isFavorite(pet)" @click.stop="unfavorite(pet)"></q-btn>
      </q-item-section>

    </q-item>
  </q-list>
</template>

<script>
  import utils from '../utils'
  import store from "../store";

  export default {
    name: 'PageIndex',
    data() {
      return {
        pets: []
      }
    },
    methods: {
      favorite(pet) {
        store.addFavoriteDog(pet);
      },
      unfavorite(pet) {
        store.removeFavoriteDog(pet);
      },
      show(pet) {
        this.$router.push(`dogs/${pet.id}`);
      }
    },
    async created() {
      this.utils = utils;
      this.store = store;
      await store.loadFromServer();
      this.pets = store.dogs;
    },
  }
</script>
