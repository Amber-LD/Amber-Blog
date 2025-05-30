---
pageLayout: home
title: 站点导航
icon: /assets/images/sites-logo.png
pageClass: page-sites-nav
config:
  - type: text-image
    title: 书签管理器
    description: 收集和整理有关学习、影像、文档、论坛等相关网站链接。
    image: /assets/images/sites-logo.png
    width: 200
    list: []


  - type: features
    features:
      - title: 学习小楼
        icon: lucide:cog
        details: 文档手册、官方社区、第三方库
        link: ./sites-web.md

      - title: 综合服务
        icon: ri:service-line
        details: 博客、论坛、在线工具、影视影音
        link: ./service-sites.md

      - title: Ops 运维
        icon: grommet-icons:cloud-computer
        details: 云平台、云原生、部署
        link: ./ops-sites.md

      - title: AIGC
        icon: ph:open-ai-logo-light
        details: 大模型、人工智能、深度思考
        link: ./aigc-sites.md

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
