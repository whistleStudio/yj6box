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
  title: "创趣星盒——义务教育信息科技教学指南",
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
          { text: "创趣星盒", link: "/getting-started/创趣星盒.md" },
          { text: "编程星空软件", link: "/getting-started/编程星空软件.md" },
          { text: "注意事项", link: "/getting-started/注意事项.md" }
        ]
      },
      { 
        text: "—— 小学 ——",
      },
      {
        text: "第一单元 初识过程与控制",
        link: "/第一单元_初识过程与控制/一分为二开与关.md",
        collapsible: true,
        children: [
          { text: "一分为二开与关", link: "/第一单元_初识过程与控制/一分为二开与关.md" },
          { text: "我是小小控制员", link: "/第一单元_初识过程与控制/我是小小控制员.md" },
          { text: "输入输出与计算", link: "/第一单元_初识过程与控制/输入输出与计算.md" }
        ]
      },
      {
        text: "第二单元 数据运算有逻辑",
        link: "/第二单元_数据运算有逻辑/连续变化的数据.md",
        collapsible: true,
        children: [
          { text: "连续变化的数据", link: "/第二单元_数据运算有逻辑/连续变化的数据.md" },
          { text: "开关量的真与假", link: "/第二单元_数据运算有逻辑/开关量的真与假.md" },
        ]
      },
      {
        text: "第三单元 有了反馈更优化",
        link: "/第三单元_有了反馈更优化/从人工到自动化.md",
        collapsible: true,
        children: [
          { text: "从人工到自动化", link: "/第三单元_有了反馈更优化/从人工到自动化.md" },
          { text: "开环控制应用广", link: "/第三单元_有了反馈更优化/开环控制应用广.md" },
          { text: "通过反馈知效果", link: "/第三单元_有了反馈更优化/通过反馈知效果.md" },
        ]
      },
      {
        text: "第四单元 控制系统的描述",
        link: "/第四单元_控制系统的描述/模块组装很灵活.md",
        collapsible: true,
        children: [
          { text: "控制系统有特点", link: "/第四单元_控制系统的描述/控制系统有特点.md" },
          { text: "模块组装很灵活", link: "/第四单元_控制系统的描述/模块组装很灵活.md" }
        ]
      },
      {
        text: "第五单元 智能种植有方法",
        link: "/第五单元_智能种植有方法/土壤湿度控制好.md",
        collapsible: true,
        children: [
          { text: "土壤湿度控制好", link: "/第五单元_智能种植有方法/土壤湿度控制好.md" },
          { text: "光照温度要适宜", link: "/第五单元_智能种植有方法/光照温度要适宜.md" },
        ]
      },
      {
        text: "第六单元 电梯运行的控制",
        link: "/第六单元_电梯运行的控制/找找电梯子系统.md",
        collapsible: true,
        children: [
          { text: "找找电梯子系统", link: "/第六单元_电梯运行的控制/找找电梯子系统.md" },
          { text: "到达指定的楼层", link: "/第六单元_电梯运行的控制/到达指定的楼层.md" },
          { text: "电梯门的开与关", link: "/第六单元_电梯运行的控制/电梯门的开与关.md" },
          { text: "如果超载电梯停", link: "/第六单元_电梯运行的控制/如果超载电梯停.md" }
        ]
      },
      {
        text: "第七单元 汽车里的小奥秘",
        link: "/第七单元_汽车里的小奥秘/倒车防撞请注意.md",
        collapsible: true,
        children: [
          { text: "自动熄灭转向灯", link: "/第七单元_汽车里的小奥秘/自动熄灭转向灯.md" },
          { text: "安全带未系提醒", link: "/第七单元_汽车里的小奥秘/安全带未系提醒.md" },
          { text: "倒车防撞请注意", link: "/第七单元_汽车里的小奥秘/倒车防撞请注意.md" },
          { text: "定速巡航的控制", link: "/第七单元_汽车里的小奥秘/定速巡航的控制.md" },
        ]
      },
      { 
        text: "—— 初中 ——",
      },
      {
        text: "第一单元 从感知到物联",
        link: "/初中第一单元_从感知到物联/环境数据要感知.md",
        collapsible: true,
        children: [
          { text: "环境数据要感知", link: "/初中第一单元_从感知到物联/环境数据要感知.md" },
          { text: "物物相连有价值", link: "/初中第一单元_从感知到物联/物物相连有价值.md" },
          // { text: "物联功能趣体验", link: "/初中第一单元_从感知到物联/物联功能趣体验.md" }
        ]
      },
      {
        text: "第二单元 万物互联有协议",
        link: "/初中第二单元_万物互联有协议/互联协议仍沿用.md",
        collapsible: true,
        children: [
          { text: "互联协议仍沿用", link: "/初中第二单元_万物互联有协议/互联协议仍沿用.md" },
          { text: "巧用蓝牙做工具", link: "/初中第二单元_万物互联有协议/巧用蓝牙做工具.md" },
          { text: "物物互通有新径", link: "/初中第二单元_万物互联有协议/物物互通有新径.md" },
          { text: "电子标签我揭秘", link: "/初中第二单元_万物互联有协议/电子标签我揭秘.md" }
        ]
      },
      {
        text: "第三单元 简单物联功能实践",
        link: "/初中第三单元_简单物联功能实践/刷卡开锁易实现.md",
        collapsible: true,
        children: [
          { text: "刷卡开锁易实现", link: "/初中第三单元_简单物联功能实践/刷卡开锁易实现.md" },
          { text: "远程控制更便捷", link: "/初中第三单元_简单物联功能实践/远程控制更便捷.md" },
          { text: "门铃通知即时到", link: "/初中第三单元_简单物联功能实践/门铃通知即时到.md" },
          { text: "面容钥匙显智能", link: "/初中第三单元_简单物联功能实践/面容钥匙显智能.md" }
        ]
      },
      {
        text: "第四单元 简易物联系统实践",
        link: "/初中第四单元_简易物联系统实践/反馈控制有算法.md",
        collapsible: true,
        children: [
          { text: "反馈控制有算法", link: "/初中第四单元_简易物联系统实践/反馈控制有算法.md" },
          { text: "数据分析与处理", link: "/初中第四单元_简易物联系统实践/数据分析与处理.md" },
          { text: "物联数据需采集", link: "/初中第四单元_简易物联系统实践/物联数据需采集.md" }
        ]
      },
      {
        text: "第五单元 物联网应用探索",
        link: "/初中第五单元_物联网应用探索/健康生活新设备.md",
        collapsible: true,
        children: [
          { text: "健康生活新设备", link: "/初中第五单元_物联网应用探索/健康生活新设备.md" },
          { text: "农业生产新模式", link: "/初中第五单元_物联网应用探索/农业生产新模式.md" },
          { text: "医疗设施新功能", link: "/初中第五单元_物联网应用探索/医疗设施新功能.md" },
          { text: "学习探究新工具", link: "/初中第五单元_物联网应用探索/学习探究新工具.md" },
          { text: "文物保护有手段", link: "/初中第五单元_物联网应用探索/文物保护有手段.md" }
        ]
      },
      {
        text: "第六单元 物联网安全",
        link: "/初中第六单元_物联网安全/数字世界有身份.md",
        collapsible: true,
        children: [
          { text: "数字世界有身份", link: "/初中第六单元_物联网安全/数字世界有身份.md" },
          { text: "系统安全需升级", link: "/初中第六单元_物联网安全/系统安全需升级.md" }
        ]
      }
    ],
    sidebarDepth: 0
  }),

  base: "/tutorial/starbox_yj/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})