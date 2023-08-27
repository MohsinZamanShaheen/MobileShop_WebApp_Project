import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
const app = createApp(App).use(router);
app.config.globalProperties.cart = []

app.mount('#app')