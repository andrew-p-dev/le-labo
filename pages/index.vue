<template>
  <div class="paper-card" style="height: 100%">
    <v-carousel :continuous="true" v-model="carousel" hide-delimiters next-icon="$menu-right" :height="carouselHeight">
        <div v-if="$vuetify.breakpoint.smAndDown">
          <v-carousel-item>
            <v-img :height="carouselHeight" :src="require('@/static/brown.jpg')" />
          </v-carousel-item>
          <v-carousel-item>
            <v-img :height="carouselHeight" :src="require('@/static/transparent.jpg')" />
          </v-carousel-item>
          <v-carousel-item>
            <v-img :height="carouselHeight" :src="require('@/static/black.jpg')" />
          </v-carousel-item>
          <v-carousel-item>
            <v-img :height="carouselHeight" :src="require('@/static/purple.jpg')" />
          </v-carousel-item>
        </div>
        <v-row v-else style="height: 100%" class="paper-card" no-gutters>
          <v-col cols="335px" style="height: 100vh; z-index: 2" class="pt-1 paper-card">
            <Label v-show="carousel === 0" title="Clou 20" :description="brownDescription" />
            <Label v-show="carousel === 1" title="Provence 22" :description="lavenderDescription" />
            <Label v-show="carousel === 2" title="Noire 0" :description="blackDescription" />
            <Label v-show="carousel === 3" title="Tudor 85" :description="roseDescription" />
          </v-col>
          <v-col>
            <v-carousel-item>
              <v-img max-width="calc(100vw - 340px)" min-height="100vh" :src="require('@/static/brown.jpg')" />
            </v-carousel-item>
            <v-carousel-item>
              <v-img max-width="calc(100vw - 340px)" min-height="100vh" :src="require('@/static/transparent.jpg')" />
            </v-carousel-item>
            <v-carousel-item>
              <v-img max-width="calc(100vw - 340px)" min-height="100vh" :src="require('@/static/black.jpg')" />
            </v-carousel-item>
            <v-carousel-item>
              <v-img max-width="calc(100vw - 340px)" min-height="100vh" :src="require('@/static/purple.jpg')" />
            </v-carousel-item>
          </v-col>
        </v-row>
    </v-carousel>
    <div v-if="$vuetify.breakpoint.smAndDown" style="padding-top: calc((100vw - 330px) / 2)" >
      <Label v-show="carousel === 0" title="Clou 20" :description="brownDescription" />
      <Label v-show="carousel === 1" title="Provence 22" :description="lavenderDescription" />
      <Label v-show="carousel === 2" title="Noire 0" :description="blackDescription" />
      <Label v-show="carousel === 3" title="Tudor 85" :description="roseDescription" />
    </div>
  </div>
</template>

<script>

import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'empty'
})
export default class Dashboard extends Vue {
  carousel = 0
  brownDescription = ['nettoyage', 'exfoliating bar']
  lavenderDescription = ['suspense', 'lavender suspension']
  blackDescription = ['fumée', 'sable creamy wash']
  roseDescription = ['à base de plantes', 'herbacious wash']

  get carouselHeight() {
    return this.$vuetify.breakpoint.smAndDown ? '300px' : 'auto'
  }
}
</script>

<style lang="scss">
.v-carousel {
  .v-window__prev {
    display: none;
  }
  .v-window__next {
    // background: none;
    .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
      opacity: 0.14;
    }
  }
}
</style>
