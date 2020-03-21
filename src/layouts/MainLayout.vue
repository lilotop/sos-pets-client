<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="filter_list" @click="left = !left" />

        <q-toolbar-title>
          SOS חיות
        </q-toolbar-title>
        <q-btn round flat :text-color="onlyFavorites ? 'red':'white'" :icon="onlyFavorites ? 'favorite' : 'favorite_border'" @click="toggleFavorites()">
          <q-badge v-if="favoritesCount > 0" color="red" floating>{{favoritesCount}}</q-badge>
        </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="כלבים" />
        <q-route-tab to="/cats" label="חתולים" disable />
      </q-tabs>
    </q-header>

    <q-drawer behavior="mobile" show-if-above v-model="left" side="left" bordered>
      <q-toolbar class="flex justify-between bg-primary text-white">
        <q-toolbar-title>
        {{dogsCount}} כלבים מחכים לאימוץ
        </q-toolbar-title>
        <q-btn icon="close" flat round @click="left = false"></q-btn>
      </q-toolbar>

      <q-form class="q-pa-lg">
        <q-select rounded outlined v-model="ages" :options="ageOptions" label="גיל" />
        <q-select rounded outlined v-model="sex" :options="sexOptions" label="מין" class="q-mt-md" />
      </q-form>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import store from "../store";

  export default {
    data () {
      return {
        left: false,
        ages: {label:'כל הגילאים', value: 'all'},
        ageOptions: [
          {label:'כל הגילאים', value: 'all'},
          {label:'צעירים (עד 3 שנים)', value: 'young'},
          {label:'בוגרים (3-8)', value: 'adult'},
          {label:'מבוגרים (8+)', value: 'old'},
        ],
        sex: {label:'לא משנה המין', value:'all'},
        sexOptions: [
          {label:'לא משנה המין', value:'all'},
          {label:'זכר', value:'male'},
          {label:'נקבה', value:'female'},
        ]
      }
    },
    computed: {
      onlyFavorites() {
        return store.onlyFavorites;
      },
      favoritesCount() {
        return store.favoriteDogs.length;
      },
      dogsCount() {
        return store.dogs.length;
      }
    },
    methods: {
      toggleFavorites() {
        store.onlyFavorites = !store.onlyFavorites;
      }
    }
  }
</script>
