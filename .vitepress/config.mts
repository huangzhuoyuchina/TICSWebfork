import { defineConfig } from 'vitepress'


export default defineConfig({
  cleanUrls: true,
  title: "星轨旅行奇想社",
  description: "以创意与热爱重塑提瓦特的二创组织",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'A fan creation organization reshaping Teyvat with creativity and passion',
      title: 'Teyvat Institute of Culture and Science',
      themeConfig: {
        outline: false,
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'nav',
            link: '/en/nav/introduce',
            activeMatch: '^/en/nav/'
          },
          {
            text: 'Community',
            items: [
              { text: 'Join Our Discord', link: '/en/others/community' }
            ]
          },
          {
            text: 'Others',
            items: [
              { text: 'E.U.L.A', link: '/en/help/E.U.L.A' },
              { text: 'Acknowledgement List', link: '/others/thanks' },
            ]
          },
          { text: 'V6.0.0', link: '/en/about' },
          { text: 'Join', link: '/en/join_us' }
        ],
        sidebar: {
          '/en/nav/': [
            {
              text: 'nav',
              items: [
                {
                  text: 'About Us',
                  collapsed: false,
                  items: [
                    { text: 'Team Introduction', link: '/en/nav/introduce' },
                    { text: 'Member List', link: '/en/nav/members' },
                    { text: 'Find Us', link: '/en/nav/contactus' }
                  ]
                },
                {
                  text: 'Our Works',
                  collapsed: false,
                  items: [
                    {
                      text: 'Book',
                      collapsed: true,
                      items: [
                        { text: 'Genmusic', link: '/en/nav/works/books/genmusic' },
                        { text: 'Genology', link: '/en/nav/works/books/genology' },
                        { text: 'Teyvat Chronicle', link: '/en/nav/works/books/chronicle' },
                        { text: 'Starrailics', link: '/en/nav/works/books/starrailics' },
                        { text: 'Teyvat Language', link: '/en/nav/works/books/language' },
                        { text: 'Teyvat Biology', link: '/en/nav/works/books/biology' }
                      ]
                    },
                  ]
                },
                {
                  text: 'News/Announcements',
                  collapsed: false,
                  items: [
                    { text: 'Latest News', link: '/en/nav/news' },
                    { text: 'Annoucements', link: '/en/nav/announcements' },
                    { text: 'Development News', link: '/en/nav/developNews' }
                  ]
                },
              ]
            }
          ]
        },
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/head&favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/head&favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#1b1b1f', media: '(prefers-color-scheme: dark)' }]
  ],
  themeConfig: {
    outline: false,
    logo: '/head&favicon.png',
    notFound: {
      title: '页面丢掉了',
      quote: '可能是走丢了，也可能被喵吃掉了 🐱',
      linkText: '返回首页'
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '导航',
        link: '/nav/introduce',
        activeMatch: '^/nav/'
      },
      { text: '加入聊天室', link: '/pages/community' },
      {
        text: '购买',
        items: [
          { text: '购买/客服', link: '/pages/buy.md' },
          { text: '订单号说明', link: '/pages/order_number' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'E.U.L.A', link: '/pages/E.U.L.A' }
          // { text: '旧官网', link: 'http://tics.top' }
        ]
      },
      {
        text: '部门页面',
        items: [
          { text: '历史研究院', link: 'https://next.tics.top/department/TIH/' }
        ]
      },
      { text: 'V6.0.0', link: '/pages/about' },
      { text: '招贤纳士', link: '/pages/join_us' }
    ],
    sidebar: {
      '/nav/': [
        {
          text: '导航',
          items: [
            {
              text: '关于我们',
              collapsed: false,
              items: [
                { text: '团队介绍', link: '/nav/introduce' },
                { text: '成员列表', link: '/nav/members' },
                { text: '寻找我们', link: '/nav/contactus' },
                { text: '捐款鸣谢', link: '/nav/thankyou' }
              ]
            },
            {
              text: '创作作品',
              collapsed: false,
              items: [
                {
                  text: '书籍',
                  collapsed: true,
                  items: [
                    { text: '原音', link: '/nav/works/books/genmusic' },
                    { text: '原学', link: '/nav/works/books/genology' },
                    { text: '提瓦特编年史', link: '/nav/works/books/chronicle' },
                    { text: '穹学', link: '/nav/works/books/starrailics' },
                    { text: '提瓦特生物志', link: '/nav/works/books/biology' }
                  ]
                },
                {
                  text: '程序',
                  collapsed: true,
                  items: [
                    { text: 'HoYoAlarms', link: '/nav/works/programs/HoYoAlarms' },
                  ]
                },
              ]
            },
            {
              text: '动态/更新',
              collapsed: false,
              items: [
                { text: '最新动态', link: '/nav/news' },
                { text: '公告', link: '/nav/announcements' },
                { text: '网站更新动态', link: '/nav/developNews' }
              ]
            },
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>'
        },
        link: 'https://space.bilibili.com/3546861499582770'
      }
    ],
    footer: {
      copyright: '使用本网站及代表您知晓并同意<a href="/pages/E.U.L.A">《隐私政策》</a><br>Copyright © 2024-2025 星轨旅行奇想社 | Teyvat Institute of Culture and Science',
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              }
            }
          },
          ja: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '関連する結果が見つかりません',
                resetButtonTitle: '検索条件をクリア',
                footer: {
                  selectText: '選択',
                  navigateText: '切り替え'
                }
              }
            }
          }
        }
      }
    },
    generalMembers: [{"name":"叶雨晴·克里斯蒂安"},{"name":"芙安"},{"name":"瑞"},{"name":"森林蝙蝠"},{"name":"冬日光114"},{"name":"墨墨"},{"name":"Moru.kyang"},{"name":"Pecarius"},{"name":"岁暮"},{"name":"剩下交给星空"},{"name":"The昊子"},{"name":"想要原石真君"},{"name":"然"},{"name":"根号龙"},{"name":"真·风神杂烩菜"},{"name":"千星."},{"name":"提瓦特老非酋"},{"name":"张3上树"},{"name":"阴间水蜜桃"},{"name":"林子大了什么鸟都吃"},{"name":"舒琳"},{"name":"卢少爷"},{"name":"名余曰正则兮"},{"name":"容心"},{"name":"温迪"},{"name":"花火花花火花火火"},{"name":"烧糊的狐小苏"},{"name":"听凭风引"},{"name":"魈猫猫"},{"name":"孤独小程"},{"name":"别管懒大王"},{"name":"川崎安"},{"name":"虽云乐"},{"name":"流星Light-Star"},{"name":"同山月"},{"name":"YinNery"},{"name":"宇橙子"},{"name":"白枝云冬"},{"name":"天徐"},{"name":"乐正七"}]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 使用 markdown-it 插件
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },
});