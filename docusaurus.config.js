const nodeVersion = require("./imageflow-node_versions.json");
module.exports = {
  title: "Imageflow",
  tagline: "Imaging at scale",
  url: "https://imageflow.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/imazen.png",
  organizationName: "imazen",
  projectName: "imageflow-web",
  themeConfig: {
    navbar: {
      logo: {
        alt: "Imageflow Logo",
        src: "img/imageflow.svg",
        srcDark: "img/imageflow-white.svg",
      },
      items: [
        {
          href: "https://github.com/imazen/",
          label: "GitHub",
          position: "left",
        },
        {
          to: "/about/main",
          label: "Docs",
          position: "left",
        },
        {
          to: "/demo/",
          label: "Demo",
          position: "left",
        },
        {
          label: "More",
          position: "left",
          items: [
            {
              label: "ImageFlow Nodejs",
              to: "imageflow-node",
            },
            {
              label: "ImageFlow Golang",
              to: "imageflow-go",
            },
            {
              label: "ImageFlow Ruby",
              to: "imageflow-ruby",
            },
            {
              label: "ImageFlow DotNet Server",
              to: "imageflow-dotnet-server",
            },
            {
              label: "ImageFlow DotNet",
              to: "imageflow-net",
            },
            {
              label: "Libimageflow",
              to: "libimageflow",
            },
            // ... more items
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "imageflow-node",
              to: "/imageflow-node/modules/_index_",
            },
            {
              label: "Licensing",
              to: "/about/licensing",
            },
            {
              label: "Pledges",
              to: "/about/pledges",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/imageflow",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/imazenllc",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/imazen/imaflow",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Imazen, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "imageflow-node",
        path: "imageflow-node",
        routeBasePath: "imageflow-node",
        sidebarPath: require.resolve("./imageflow-node/sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "imageflow-go",
        path: "imageflow-go",
        routeBasePath: "imageflow-go",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "imageflow-ruby",
        path: "imageflow-ruby",
        routeBasePath: "imageflow-ruby",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "imageflow-net",
        path: "imageflow-net",
        routeBasePath: "imageflow-net",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "imageflow-dotnet-server",
        path: "imageflow-dotnet-server",
        routeBasePath: "imageflow-dotnet-server",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "libimageflow",
        path: "libimageflow",
        routeBasePath: "libimageflow",
        sidebarPath: require.resolve("./libimageflow/sidebars.js"),
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/about",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
