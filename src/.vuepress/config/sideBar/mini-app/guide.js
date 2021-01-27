module.exports = [
  "",
  "file-structure",
  "env",
  {
    title: "配置",
    icon: "config",
    collapsable: false,
    prefix: "config/",
    children: ["", "app-config", "page-config", "sitemap-config"],
  },
  {
    title: "框架",
    icon: "frame",
    collapsable: false,
    prefix: "frame/",
    children: ["intro", "scene", "env", "mechanism", "update"],
  },
  {
    title: "逻辑层",
    icon: "process",
    collapsable: false,
    prefix: "service/",
    children: [
      "",
      "lifetime",
      "route",
      "register",
      "app",
      "page",
      "run",
      "module",
      {
        title: "API",
        icon: "api",
        prefix: "api/",
        children: ["", "route", "storage", "interact", "network", "system"],
      },
    ],
  },
  {
    title: "视图层",
    icon: "layout",
    collapsable: false,
    prefix: "view/",
    children: [
      "",
      {
        title: "WXML",
        icon: "code",
        children: [
          "wxml",
          "data-bind",
          "condition-render",
          "list-render",
          "template",
        ],
      },
      "wxss",
      "event",
      "component",
      "animation",
      "wxs",
      "wxs-event",
      "model",
      "selector",
      "rendering-cache",
    ],
  },
  {
    title: "能力",
    icon: "safe",
    collapsable: false,
    prefix: "ability/",
    children: ["", "network", "storage", "file-system", "debug"],
  },
];