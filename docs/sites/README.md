---
pageLayout: home
title: 站点导航
icon: /assets/images/sites-logo.png
pageClass: page-sites-nav
config:
  - type: text-image
    title: 站点管理器
    description: 收集和整理有关学习、影像、文档、论坛等相关网站链接。
    image: /assets/images/sites-logo.png
    width: 200
    list: []


  - type: features
    features:
      - title: 学习小楼
        icon: hugeicons:archive-01
        details: 文档手册、官方社区、第三方库
        link: ./sites-web.md

      - title: 综合服务
        icon: hugeicons:service
        details: 在线工具、图片素材、影视影音
        link: ./sites-service.md

      - title: 梦幻国度
        icon: hugeicons:airplane-01
        details: FANCLUB、动漫论坛、游戏社区
        link: ./sites-grace.md

  - type: custom
permalink: /sites-index/
createTime: 2025/05/29 21:07:08
---

<style>
.page-sites-nav {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #ff8736 30%, #ffdf85);
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgb(255, 246, 215) 50%,
    rgb(239, 216, 177) 50%
  );
  --vp-home-hero-image-filter: blur(33px);
}

[data-theme="dark"] .page-sites-nav {
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgba(255, 246, 215, 0.07) 50%,
    rgba(239, 216, 177, 0.15) 50%
  );
}
</style>
