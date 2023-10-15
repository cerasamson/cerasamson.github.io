
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/cera/Desktop/cerasamson.github.io/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/cera/Desktop/cerasamson.github.io/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/cera/Desktop/cerasamson.github.io/src/pages/index.tsx")),
  "component---src-pages-projects-tsx": preferDefault(require("/Users/cera/Desktop/cerasamson.github.io/src/pages/projects.tsx"))
}

