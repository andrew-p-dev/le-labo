<template>
  <v-carousel hide-delimiters height="100%">
    <v-carousel-item>
      <Soap image="brown.jpg">
        <Label title="Clou 20" :description="brownDescription" />
      </Soap>
    </v-carousel-item>
    <v-carousel-item>
      <Soap image="transparent.jpg">
        <Label title="Provence 22" :description="lavenderDescription" />
      </Soap>
    </v-carousel-item>
    <v-carousel-item>
      <Soap image="black.jpg">
        <Label title="Noire 0" :description="blackDescription" />
      </Soap>
    </v-carousel-item>
    <v-carousel-item>
      <Soap image="purple.jpg">
        <Label title="Tudor 85" :description="roseDescription" />
      </Soap>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'empty'
})
export default class Dashboard extends Vue {
  brownDescription = ['nettoyage', 'exfoliating bar']
  lavenderDescription = ['suspense', 'lavender suspension']
  blackDescription = ['fumée', 'sable creamy wash']
  roseDescription = ['à base de plantes', 'herbacious wash']
}
</script>
