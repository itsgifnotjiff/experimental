<template>
  <v-app>
    <v-content>
      <AppBar/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppBar from './views/AppBar'

export default {
  name: 'App',

  components: {
    AppBar,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
