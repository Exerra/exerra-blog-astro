const SITE = "https://blog.exerra.xyz"

let postsImport: any = import.meta.glob("../../data/blog-posts/*.md", { eager: true })
let posts = Object.values(postsImport)
posts = posts.sort((a: any, b: any) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf())

const items = posts.map((post: any) => {
  const slug = post.file.split('/').pop()?.split('.').shift()
  const postUrl = `${SITE}/blog/${slug}`

  let content = post.compiledContent()

  let image = post.frontmatter.image
  if (image && image.startsWith("/")) {
    image = SITE + image
  }

  const imageTag = image ? `<p><img src="${image}" alt="${post.frontmatter.imagealt || post.frontmatter.title}" /></p>` : ""

  return {
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": `${postUrl}#activity`,
    "type": "Create",
    "actor": `${SITE}/activitypub/actor`,
    "published": new Date(post.frontmatter.publishDate).toISOString(),
    "object": {
      "id": postUrl,
      "type": "Article",
      "attributedTo": `${SITE}/activitypub/actor`,
      "name": post.frontmatter.title,
      "content": imageTag + content,
      "url": postUrl,
      "published": new Date(post.frontmatter.publishDate).toISOString(),
      "to": ["https://www.w3.org/ns/activitystreams#Public"],
      "cc": [`${SITE}/activitypub/followers`]
    }
  }
})

const outbox = {
  "@context": "https://www.w3.org/ns/activitystreams",
  "id": `${SITE}/activitypub/outbox`,
  "type": "OrderedCollection",
  "totalItems": items.length,
  "orderedItems": items
}

export const get = () => ({
  body: JSON.stringify(outbox)
})
