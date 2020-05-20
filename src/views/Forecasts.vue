<template>
    <v-container>
        <p class="display-2">Forecasts</p>
        <!-- <v-btn x-large to="./forecasts/a1">A1</v-btn>
        <v-btn x-large to="./forecasts/a2">A2</v-btn>
        <v-btn x-large to="./forecasts/a3">A3</v-btn>
        <router-view/> -->
        
        <v-tabs vertical color="light-green darken-1">
            <v-tab v-for="tab in tabsList" :key="tab.id" :to="tab.route" exact>{{ tab.name }}</v-tab>
        </v-tabs>
        <router-view/>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            tabsList: [
                { id: 1, name: "A1", route: '/forecasts/a1' },
                { id: 2, name: "A2", route: '/forecasts/a2' },
                { id: 3, name: "A3", route: '/forecasts/a3' }
            ]
        }
    }
}
</script>