import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  // logo: 'https://theme-plume.vuejs.press/plume.png',
  logo: '/logo.png',

  appearance: true,  // 配置 深色模式

  social: [
    {
      icon: {
        svg: `<svg t="1749035801533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11651" width="512" height="512"><path d="M512 12.672c-282.88 0-512 229.248-512 512 0 226.261333 146.688 418.133333 350.08 485.76 25.6 4.821333 34.986667-11.008 34.986667-24.618667 0-12.16-0.426667-44.373333-0.64-87.04-142.421333 30.890667-172.458667-68.693333-172.458667-68.693333C188.672 770.986667 155.008 755.2 155.008 755.2c-46.378667-31.744 3.584-31.104 3.584-31.104 51.413333 3.584 78.421333 52.736 78.421333 52.736 45.653333 78.293333 119.850667 55.68 149.12 42.581333 4.608-33.109333 17.792-55.68 32.426667-68.48-113.706667-12.8-233.216-56.832-233.216-253.013333 0-55.893333 19.84-101.546667 52.693333-137.386667-5.76-12.928-23.04-64.981333 4.48-135.509333 0 0 42.88-13.738667 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52 0.256 87.04 5.888 128 17.28 97.28-66.218667 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581333 5.12 135.509333 32.64 35.84 52.48 81.493333 52.48 137.386667 0 196.693333-119.68 240-233.6 252.586667 17.92 15.36 34.56 46.762667 34.56 94.72 0 68.522667-0.64 123.562667-0.64 140.202666 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512" fill="" p-id="11652"></path></svg>`,
        name: "github",
      },

      link: "https://github.com/Amber-LD",
    },
    {
      icon: {
        svg: `<svg t="1749034764010" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9086" width="512" height="512"><path d="M896.43834 165.698h-62.34l54.57-54.57c23.43-23.37 23.43-70.17 0-93.54-23.37-23.37-70.17-23.37-93.54 0l-155.88 148.17H452.17034l-155.94-148.23c-23.43-23.37-70.17-23.37-93.54 0-23.37 23.43-23.43 70.17 0 93.54l54.57 54.57h-62.34A192.983 192.983 0 0 0 0.00934 360.607v420.899c0 116.97 85.71 202.68 194.91 202.68h693.75a192.983 192.983 0 0 0 194.85-194.85v-428.73c7.83-109.14-77.94-194.91-187.08-194.91z m54.63 615.809a69.869 69.869 0 0 1-70.17 70.17h-678.27a69.869 69.869 0 0 1-70.109-70.17v-413.13a69.869 69.869 0 0 1 70.17-70.17h678.21a69.869 69.869 0 0 1 70.17 70.17v413.19z m-608.039-342.96a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.23-70.17z m405.36 0a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.17-70.17z" p-id="9087"></path></svg>`,
        name: "bilibili",
      },
      link: "https://space.bilibili.com/30588361?spm_id_from=333.33.0.0",
    },
  ],
  navbarSocialInclude: ['github', 'bilibili'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  // footer: {
  //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: '',
  // },
  footer: {
    message: `<a rel="nofollow" target="_blank" href="https://beian.miit.gov.cn/" title="粤ICP备2025414162号-1" style="text-decoration: none;"><img src="/assets/icons/icp.svg" style="vertical-align: text-bottom; height: 16px;display: inline-block" />粤ICP备2025414162号-1</a><a style="margin-left: 10px; text-decoration: none;" href="https://icp.gov.moe/?keyword=20258387" target="_blank"><img src="/assets/icons/micp.png" style="vertical-align: text-bottom; height: 16px;display: inline-block" />萌ICP备20258387号</a>`,
    copyright: "© Copyright 2025 All Rights Reserved. 版权所有：Carol-LD",
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    // avatar: 'https://theme-plume.vuejs.press/plume.png',
    avatar: '/logo.png',
    name: "Carol-LD'Blog",
    description: '薔薇色の人生',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
