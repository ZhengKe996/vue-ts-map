import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import "@/assets/less/index.less";
import { Popup, Col, Row } from "vant";

import "vant/lib/index.css";

const app = createApp(App);

app.use(router);
app.use(Popup).use(Col).use(Row);
app.mount("#app");
