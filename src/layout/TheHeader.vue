<template>
  <v-app-bar
        style="padding:0 90px"
        color="white"
        density="compact"
        :elevation="5"
      >
        <template v-slot:prepend>
          <v-btn icon="mdi-format-align-justify"></v-btn>
             <!-- Contact버튼(모달팝업) -->
      
        </template>



        <v-app-bar-title><router-link to="/" class="title text-h6 font-weight-bold text-decoration-none">Vuetify App</router-link></v-app-bar-title>
        <!-- ctrl+space로 익스텐션 사용해 검색 -->
        <v-list class="d-flex align-center">
          <v-list-item v-for="(menu,i) in menus" :key="i" link>
            <router-link :to="menu.url" class="nav text-decoration-none font-weight-bold">{{ menu.title }}</router-link>
          </v-list-item>
        
        </v-list>

        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          
          <v-dialog transition="dialog-top-transition" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" color="#3949AB" rounded v-bind="props"
            >CONTACT</v-btn
          >
        </template>
        
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar color="teal" title="Opening from the top"></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">내 전화 번호!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn variant="text" @click="isActive.value = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
          <v-btn icon="mdi-account"></v-btn>
        </template>
      </v-app-bar>
</template>

<script setup>
  const menus = [
    {title:'Post', url:'/'},
    {title:'Follow', url:'/follow'},
    {title:'Follower', url:'/follower'},
  ]

</script>

<style scoped>
  .title{
    color: #3949AB;
  }
  .nav{color: #212121}
  .nav:hover{color: #3949AB}
</style>