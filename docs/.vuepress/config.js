import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "创趣智能实验盒——义务教育六年级教程",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/快速索引.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",

    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          { text: "快速索引", link: "/getting-started/快速索引.md" },
          { text: "创趣智能实验盒", link: "/getting-started/创趣智能实验盒.md" },
          { text: "编程星空软件", link: "/getting-started/编程星空软件.md" },
          { text: "注意事项", link: "/getting-started/注意事项.md" },

        ]
      }, 
      {
        text: "第一单元 初识过程与控制",
        link: "/第一单元_初识过程与控制/一分为二开与关.md",
        children: [
          { text: "一分为二开与关", link: "/第一单元_初识过程与控制/一分为二开与关.md" },
        ]
      }   
    ],
    sidebarDepth: 0
  }),

  base: "/tutorial/yj6box/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})