<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          SOS חיות
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="כלבים" />
        <q-route-tab to="/cats" label="חתולים" disable />
      </q-tabs>
    </q-header>

    <q-drawer behavior="mobile" show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <h3>פקדים</h3>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false
      }
    }
  }
</script>
