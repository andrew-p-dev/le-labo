<template>
  <div v-if="$vuetify.breakpoint.smAndDown" class="paper-card" style="height: 100%">
    <v-img :src="imageSrc" />
    <div class="pa-9">
      <slot  />
    </div>
  </div>
  <v-row style="height: 100%" class="paper-card" v-else no-gutters>
    <v-col cols="335px" style="height: 100%" class="pt-1">
      <slot />
    </v-col>
    <v-col>
      <v-img max-width="calc(100vw - 340px)" min-height="100vh" :gradient="linearGradient" :src="imageSrc" />
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Soap extends Vue {
  isLoading = true
  items: string[] = []

  @Prop({ required: true}) image!: string
  @Prop({ default: false }) gradient!: boolean

  get imageSrc() {
    return require(`@/static/${this.image}`)
  }

  get linearGradient() {
    return this.gradient ? 'to top right, rgba(100,100,100, 0), rgba(100,100,100, .1), rgba(20,20,20,.7)' : ''
  }

}
</script>

<style land="scss" scoped>
.v-divider {
  border-color: black;
}
</style>