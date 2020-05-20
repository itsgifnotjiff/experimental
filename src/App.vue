<template>
  <v-app>
    <TopBar/>

    <v-content>
      <router-view/>
    </v-content>

    <BottomNavigation/>
  </v-app>
</template>

<script>
import TopBar from './views/TopBar'
import BottomNavigation from './views/BottomNavigation'


export default {
  name: 'App',

  components: {
    TopBar,
    BottomNavigation
  },

  data: () => ({
    //
  }),
};
</script>
