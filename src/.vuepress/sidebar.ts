import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "redis",
      icon: "book",
      prefix: "redis/",
      children: "structure",
    },
    {
      text: "MySQL",
      icon: "book",
      prefix: "mysql/",
      children: "structure",
    },
    {
      text: "Java基础",
      icon: "book",
      prefix: "java/",
      children: "structure",
    },
    {
      text: "JVM",
      icon: "book",
      prefix: "jvm/",
      children: "structure",
    },
    {
      text: "消息队列",
      icon: "book",
      prefix: "message/",
      children: "structure",
    },
    {
      text: "分布式",
      icon: "book",
      prefix: "distribute/",
      children: "structure",
    },
    {
      text: "场景设计",
      icon: "book",
      prefix: "systemdesign/",
      children: "structure",
    },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
  "/interview/": "structure",
  "/backend/": "structure",
  "/tools/": "structure",
  "/llm/": "structure"
});
