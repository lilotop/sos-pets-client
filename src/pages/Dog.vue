<template>
  <div>
    <q-carousel height="300px"
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                v-if="dog"
    >
      <q-carousel-slide :name="i" :img-src="`statics/images/${dog.id}${i}.jpg`" v-for="i in imageIndexes"/>
    </q-carousel>
    <q-card v-if="dog">
      <q-card-section>
        <q-btn v-if="utils.isFavorite(dog)"
               @click="store.removeFavoriteDog(dog)"
               round
               size="20px"
               color="white"
               text-color="red"
               icon="favorite"
               class="absolute"
               style="top: 0; left: 12px; transform: translateY(-50%);"
        />
        <q-btn v-if="!utils.isFavorite(dog)"
               @click="store.addFavoriteDog(dog)"
               round
               size="20px"
               color="white"
               text-color="primary"
               icon="favorite_border"
               class="absolute"
               style="top: 0; left: 12px; transform: translateY(-50%);"
        />
        <div class="text-h4">{{dog.name}}</div>
        <div>{{utils.age(dog)}}</div>
        <div>{{utils.sex(dog)}}</div>
      </q-card-section>
      <q-card-section>
        {{dog.story}}
      </q-card-section>
      <q-card-section>
        <q-chip outline v-if="vetStatus.hex1">משושה 1</q-chip>
        <q-chip outline v-if="vetStatus.hex2">משושה 2</q-chip>
        <q-chip outline v-if="vetStatus.hex3">משושה 3</q-chip>
        <q-chip outline v-if="vetStatus.worms">תילוע</q-chip>
        <q-chip outline v-if="vetStatus.fleas">פירעוש</q-chip>
        <q-chip outline v-if="vetStatus.vaccinated">מחוסנ/ת</q-chip>
        <q-chip outline v-if="vetStatus.spayed">מסורס/מעוקרת</q-chip>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  import utils from '../utils'
  import store from "../store";
  import find from 'lodash-es/find';

  export default {
    name: 'PageIndex',
    data() {
      return {
        dog: null,
        slide: 1,
        imageIndexes: [1, 2, 3, 4],
        vetStatus: {}
      }
    },
    props: {
      id: String
    },
    methods: {},
    async created() {
      this.utils = utils;
      this.store = store;
      await store.loadFromServer();
      this.dog = find(store.dogs, ['id', this.id]);

      this.vetStatus = {
        hex1: this.dog.vet_status.includes('h1'),
        hex2: this.dog.vet_status.includes('h2'),
        hex3: this.dog.vet_status.includes('h3'),
        worms: this.dog.vet_status.includes('w'),
        fleas: this.dog.vet_status.includes('f'),
        vaccinated: this.dog.vet_status.includes('v'),
        spayed: this.dog.vet_status.includes('s'),

      }
    }

  }
</script>
