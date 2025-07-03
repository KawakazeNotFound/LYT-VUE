import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import TalkingMascot from './components/TalkingMascot.vue'
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import { bulletinPopoverPlugin } from '@vuepress-reco/vuepress-plugin-bulletin-popover'
import FloatingButton from './components/FloatingButton.vue'  

export default defineUserConfig({
  ///
  plugins: [
    bulletinPopoverPlugin({
      title: '点我一下 😄',
      body: [
        {
          type: 'button',
          content: '查看更多',
          link: '/more/',
          props: { type: 'success' },
        },
      ],
      position: 'bottom-left', // 可选：设置显示位置
    }),
    // 你的其他插件
  ],
  ///
  title: "乐舞承宋韵，苏风润社区",
  description: "Nothing",
  head: [
    ['style', {}, `
      @font-face {
        font-family: 'AlimamaDaoLiTi';
        src: url('/fonts/AlimamaDaoLiTi.ttf');
      }

      .banner-brand__content .title {
        font-family: 'AlimamaDaoLiTi', cursive !important;
        color: #000 !important;
        font-weight: normal !important;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        animation: fadeInDesc 1.2s ease-in-out;
      }

      .banner-brand__content .description {
        font-family: 'AlimamaDaoLiTi', cursive !important;
        color: #000 !important;
        font-weight: normal !important;
        font-size: 1.4rem;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        animation: fadeInDesc 1.2s ease-in-out;
      }

      @keyframes fadeInTitle {
        from { opacity: 0; transform: translateY(-10px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeInDesc {
        from { opacity: 0; transform: translateY(5px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* 👇 添加 hover-reveal 效果 */
      .hover-reveal {
        position: relative;
        display: inline-block;
        color: transparent;
        cursor: pointer;
      }

      .hover-reveal::after {
        content: '';
        position: absolute;
        inset: 0;
        background: black;
        transition: opacity 0.3s;
        z-index: 1;
      }

      .hover-reveal:hover::after {
        opacity: 0;
      }

      .hover-reveal:hover {
        color: inherit;
      }
    `]
  ],
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.jpg",
    author: "Kawakaze",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "目录",
          children: ["background", "content", "feature", "plan", "result"],
        },
      ],
        "/docs/jubensha/": [
        {
          text: "剧本杀",
          children: ["init", "1","2","3","4","5"],
        },
      ],
        "/docs/wenda/": [
        {
          text: "诗词大会",
          children: ["init", "xuanze","lianxian"],
        },
      ],
        //{
        //  text: "module two",
        //  children: ["api", "plugin"],
        //},
    },
    navbar: [

      { text: "首页", link: "/" },
      { text: "剧本杀 ", link: "/docs/jubensha/init" },
      { text: "诗词大会 ", link: "/docs/wenda/init" },
      { text: "线上音乐会 ", link: "https://www.xiaohongshu.com/user/profile/676fc1bc000000001801d8fc" },
      
    ],
    bulletin: {
//原本的AI栏目
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
