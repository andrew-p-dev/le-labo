<template>
  <div class="paper-card" style="height: 100%">
    <v-carousel
      :continuous="true"
      v-model="carousel"
      hide-delimiters
      next-icon="$menu-right"
      :height="$vuetify.breakpoint.smAndDown ? '300px' : 'auto'"
    >
      <div v-if="$vuetify.breakpoint.smAndDown">
        <v-carousel-item v-for="(image, i) in images" :key="`mobile-image-${i}`">
          <CarouselImage :image="image" />
        </v-carousel-item>
      </div>
      <v-row v-else style="height: 100%" class="paper-card" no-gutters>
        <v-col cols="335px" style="height: 100vh; z-index: 2" class="pt-1 paper-card">
          <Label
            v-for="(label, i) in labels"
            :key="`label-${i}`"
            v-show="carousel === i"
            :title="label.title"
            :description="label.description"
          />
        </v-col>
        <v-col>
          <v-carousel-item v-for="(image, i) in images" :key="`image-${i}`">
            <CarouselImage :image="image" />
          </v-carousel-item>
        </v-col>
      </v-row>
    </v-carousel>
    <div v-show="$vuetify.breakpoint.smAndDown" style="padding-top: calc((100vw - 330px) / 2)" >
      <Label
        v-for="(label, i) in labels"
        :key="`mobile-label-${i}`"
        v-show="carousel === i"
        :title="label.title"
        :description="label.description"
      />
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

  images = ['brown', 'transparent', 'black', 'purple'].map(s => s + '.jpg')
  labels = [
    {
      title: 'Clou 20',
      description: ['nettoyage', 'exfoliating bar'],
    },
    {
      title: 'Provence 22',
      description: ['suspense', 'lavender suspension'],
    },
    {
      title: 'Noire 8',
      description: ['fumée', 'sable creamy wash'],
    },
    {
      title: 'Tudor 85',
      description: ['à base de plantes', 'herbacious wash'],
    },
  ]

  
}
</script>

<style lang="scss">
.v-carousel {
  .v-window__prev {
    display: none;
  }
  .v-window__next {
    .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
      opacity: 0.14;
    }
  }
}
</style>
