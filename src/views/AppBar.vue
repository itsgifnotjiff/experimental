<template>
   <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      shrink-on-scroll
      prominent
    >
    
      <v-avatar tile>
        <v-img
            alt="WMO Logo"
            class="shrink mr-2"
            contain
            src="../assets/wmo_logo.png"
            transition="scale-transition"
            width="70"/>
      </v-avatar>
      <p class="overline">
        North American Regional Centre <br/>
        Vegetation Fire and Smoke Pollution<br/>
        Warning and Avisory System
      </p>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        label="Dark"
      />

      <template v-slot:extension>
        <v-tabs centered>
          <v-tab>Home</v-tab>
          <v-tab>Forecasts</v-tab>
          <v-tab>About</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    <v-content>
      <v-container style="height: 1500px;">
        <h1>Text</h1>
      </v-container>
    </v-content>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>
