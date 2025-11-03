import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import GeneralMembersList from './components/GeneralMembersList.vue'
import Hitokoto from './components/Hitokoto.vue'
import Furigana from './components/Furigana.vue'
import HomePage from './components/HomePage.vue'
import ChineseConverter from './components/ChineseConverter.vue'
import Switch from './switch.vue'
import notfound from './NotFound.vue'


export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: Switch,
  enhanceApp({ app }) {
    app.component('GeneralMembersList', GeneralMembersList)
    app.component('Hitokoto', Hitokoto)
    app.component('Furigana', Furigana)
    app.component('HomePage', HomePage)
    app.component('ChineseConverter', ChineseConverter)
  }
}