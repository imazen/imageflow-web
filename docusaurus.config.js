const nodeVersion = require("./imageflow-node_versions.json");
module.exports = {
  title: "Imageflow",
  tagline: "Imaging at scale",
  url: "https://imageflow.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
          // dropdownActiveClassDisabled: true,
        },
        {
          label: "Crates",
          position: "right",
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
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/imazen/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
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
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
