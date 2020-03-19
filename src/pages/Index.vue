<template>
  <q-list>
    <q-item clickable v-ripple v-for="pet in pets" :to="`/dogs/${pet.id}`">
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
    },
    async mounted() {
      this.utils = utils;
      await store.loadFromServer();
      this.pets = store.dogs;
    }

  }
</script>
