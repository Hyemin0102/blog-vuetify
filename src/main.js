// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./router";

const app = createApp(App);

registerPlugins(app);

app.use(router); //router 만든거 app에서 사용하겠다고 선언
app.mount("#app");
