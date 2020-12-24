<template>
  <v-img contain :src="require('@/static/shelf-life.png')" height="90%" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ShelfLife extends Vue {}
</script>
