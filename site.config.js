const CONFIG = {
  // profile setting (required)
  profile: {
    name: "LeeSuBin",
    image: "/notion-subin.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Web developer",
    bio: "",
    email: "seeroocee@gmail.com",
    github: "Binveloper",
    instagram : "",
    linkedin: ""
  },
  projects: [
    {
      name: `binlog`,
      href: "https://github.com/Binveloper/bin.log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "binlog",
    description: "welcome to binlog!",
    theme: "dark"
  },

  // CONFIG configration (required)
  link: "https://bin-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "WebSite", "Notion"],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "Binveloper/bin.log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
