<template>
  <div>
    <q-carousel height="300px"
                animated
                v-model="slide"
                arrows
                navigation
                infinite
    >
      <q-carousel-slide :name="i" :img-src="`statics/images/${dog.id}${i}.jpg`" v-for="i in imageIndexes"/>
    </q-carousel>
    <q-card>
      <q-card-section>
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
        dog: {},
        slide: 1,
        imageIndexes: [1, 2, 3, 4],
        vetStatus: {

        }
      }
    },
    props: {
      id: String
    },
    methods: {},
    async mounted() {
      this.utils = utils;
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
