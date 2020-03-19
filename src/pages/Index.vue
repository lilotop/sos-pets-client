<template>
  <q-list>
    <q-item clickable v-ripple v-for="pet in pets">
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
        <div>{{age(pet)}}</div>
        <div>{{sex(pet)}}</div>
      </q-item-section>

    </q-item>
  </q-list>
</template>

<script>
  import axios from "axios";
  import parse from "csv-parse/lib/sync";

  export default {
    name: 'PageIndex',
    data() {
      return {
        pets: []
      }
    },
    methods: {
      age(pet) {
        let age = pet.age;
        let cutIndex = age.length - 1;
        let num = parseInt(age.slice(0, cutIndex));
        let units = age.slice(cutIndex);

        if (num === 1) {
          return units === 'y' ? 'שנה' : 'חודש';
        } else if (num === 2) {
          return units === 'y' ? 'שנתיים' : 'חודשיים';
        } else {
          return num + (units === 'y' ? ' שנים' : ' חודשים');
        }
      },
      sex(pet) {
        let sex = pet.sex;
        switch (sex) {
          case 'm':
            return 'זכר';
          case 'f':
            return 'נקבה';
          default:
            return 'אחר';
        }
      }
    },
    async mounted() {
      let res = await axios.get('statics/sos-data.csv');
      this.pets = parse(res.data, {
        columns: true,
        skip_empty_lines: true
      });
    }

  }
</script>
