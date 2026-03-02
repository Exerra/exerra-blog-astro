const postsImport: any = import.meta.glob("../../data/blog-posts/*.md", { eager: true })
const postCount = Object.keys(postsImport).length

export async function getStaticPaths() {
  return [{ params: { version: "2.0" } }]
}

const nodeinfo = {
  "version": "2.0",
  "software": {
    "name": "exerra-blog",
    "version": "1.0.0"
  },
  "protocols": [
    "activitypub"
  ],
  "usage": {
    "users": {
      "total": 1,
      "activeMonth": 1,
      "activeHalfyear": 1
    },
    "localPosts": postCount
  },
  "openRegistrations": false
}

export const get = () => ({
  body: JSON.stringify(nodeinfo)
})
