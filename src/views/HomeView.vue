<template>
  <v-container class="my-15">
    <v-row>
      <v-col cols="12" md="6">
        <h1>Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati reprehenderit distinctio omnis quas hic odio, nam sit, inventore explicabo, unde soluta enim ex. Porro possimus fugiat totam ducimus accusamus.</p>
        <v-btn size="small" rounded="xl" class="mr-3">프로필 편집</v-btn>
        <v-btn size="small" rounded="xl" class="mr-3">프로필 공유</v-btn>
        <v-btn size="small" rounded="xl">
          <v-icon
          icon="mdi-account-plus"
        ></v-icon>
      </v-btn>
      </v-col>
      <v-col  md="6">
        <img class="mainImg" src="@/assets/main.jpg" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
  .mainImg{width: 100%;}
</style>