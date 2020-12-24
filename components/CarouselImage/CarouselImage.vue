<template>
  <v-img
    :min-height="minHeight"
    :max-width="maxWidth"
    :height="carouselHeight"
    :src="imageSrc"
    :lazy-src="thumbnailSrc"
    :gradient="linearGradient"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class CarouselImage extends Vue {
  isLoading = true;

  @Prop({ required: true }) image!: string;
  @Prop({ default: false }) gradient!: boolean;

  get imageSrc() {
    return require(`@/static/${this.image}`);
  }

  get thumbnailSrc() {
    return require(`@/static/thumbnails/${this.image}`);
  }

  get carouselHeight() {
    return this.$vuetify.breakpoint.smAndDown ? "300px" : "auto";
  }

  get maxWidth() {
    return this.$vuetify.breakpoint.smAndDown ? "100vw" : "calc(100vw - 340px)";
  }

  get minHeight() {
    return this.$vuetify.breakpoint.smAndDown ? "0px" : "100vh";
  }

  get linearGradient() {
    return this.gradient
      ? "to top right, rgba(100,100,100, 0), rgba(100,100,100, .1), rgba(20,20,20,.7)"
      : "";
  }
}
</script>

<style land="scss" scoped>
.v-divider {
  border-color: black;
}
</style>
