import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'line-md:home' },
  { text: '博客', link: '/blog/', icon: 'meteor-icons:blogger',activeMatch: "^/blog/", },
  // { text: '标签', link: '/blog/tags/', icon: 'mdi:tag-outline' },
  // { text: '归档', link: '/blog/archives/', icon: 'icon-park-outline:page' },
  {
    text: "站点",
    link: "/sites/",
    icon: "line-md:link",
    activeMatch: "^/sites/",
  },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }],
    icon: 'material-symbols:note-alt-outline'
  },
])
