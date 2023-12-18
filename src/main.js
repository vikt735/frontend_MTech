import components from '@/components/UI';
import axios from 'axios';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App).use(router);

app.use(VueAxios, axios);

components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');
