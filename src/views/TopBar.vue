<template>
    <v-app-bar app>
        <v-toolbar-items>
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
        </v-toolbar-items>
    

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-tabs centered>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/forecasts">Forecasts</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
      </v-toolbar-items>

     <v-spacer></v-spacer>

     <v-switch class="pa-4"
        v-model="$vuetify.theme.dark"
        label="Dark"
      />

    </v-app-bar>
</template>