//批量注册组件
import Vue from "vue";

const importFn = require.context('./', false, /\.vue$/)

function installComponents() {
    importFn.keys().forEach(name => {
        const component = importFn(name).default
        Vue.component(component.name,component)
    });
}

export default {
    installComponents
}