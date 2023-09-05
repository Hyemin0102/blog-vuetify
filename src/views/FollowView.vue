<template>  
  <v-container class="my-16">
    <v-row class="pt-16" justify='center'>
      <v-col cols="12" class="text-center">
        <p class="text-h4">Gallery View</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>        
      </v-col>  

      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="2"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>     
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>

</style>