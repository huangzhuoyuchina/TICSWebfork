import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme, EnhanceAppContext } from 'vitepress'
import './style.css'
import './custom.css'
import GeneralMembersList from './components/GeneralMembersList.vue'
import Hitokoto from './components/hitokoto.vue'
import Furigana from './components/Furigana.vue'
import HomePage from './components/HomePage.vue'
import ChineseConverter from './components/ChineseConverter.vue'
import Switch from './switch.vue'
import NotFound from './NotFound.vue'


export default {
  ...DefaultTheme,
  extends: DefaultTheme,
  Layout: Switch,
  NotFound,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app } = ctx
    app.component('GeneralMembersList', GeneralMembersList)
    app.component('Hitokoto', Hitokoto)
    app.component('Furigana', Furigana)
    app.component('HomePage', HomePage)
    app.component('ChineseConverter', ChineseConverter)
  }
} satisfies Theme