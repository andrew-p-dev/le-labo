<template>
  <v-row class="paper-card black--text unselectable" no-gutters>
    <v-col class="d-flex justify-end">
      <v-divider class="my-0" vertical />
    </v-col>
    <v-col cols="auto">
      <v-divider class="my-0" />
      <div style="max-width: 330px">
        <div class="px-1 pt-2">
          <div class="text-h5 text-uppercase">{{ title }}</div>
          <div>{{ volume }}ml {{ volumeInFlOz }} FL.OZ.</div>
        </div>
        <v-divider class="my-0" />
        <div class="pa-2">
          <div>bloc de savon / {{ formattedDescription }}</div>
        </div>
        <v-divider class="my-0" />
        <v-row class="px-2">
          <v-col cols="auto">
            <div>Compounded:</div>
            <div>On:</div>
            <div>For:</div>
          </v-col>
          <v-col>
            <div>in our kitchen lab</div>
            <div class="d-flex justify-space-between align-center">
              <span>Christmas Eve 2020</span>
              <v-icon class="mb-1" small>$shelf-life</v-icon>
            </div>
            <div>{{ recipient }}</div>
          </v-col>
        </v-row>
        <v-divider class="my-0" />
        <div class="pa-2 text-caption">
          <span>Hand made</span>
          <v-icon size="8px">$circle-small</v-icon>
          <span class="font-weight-bold text-uppercase">{{ $config.brandName }}</span>
          <v-icon size="8px">$circle-small</v-icon>
          <span>418A/609 Victoria St, Abbotsford VIC, AUS</span>
        </div>
      </div>
      <v-divider class="my-0" />
    </v-col>
    <v-col>
      <v-divider class="my-0" vertical />
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Label extends Vue {
  isLoading = true
  items: string[] = []

  @Prop({ required: true}) title!: string
  @Prop({ default: 250}) volume!: number
  @Prop({ default: ''}) description!: string[] | string
  @Prop({ default: ''}) recipient!: string

  get volumeInFlOz() {
    return (this.volume * 0.033814).toFixed(1)
  }

  get formattedDescription() {
    return Array.isArray(this.description) ? this.description.join(' / ') : this.description
  }
}
</script>


<style land="scss" scoped>
.v-divider {
  border-color: black;
}
</style>