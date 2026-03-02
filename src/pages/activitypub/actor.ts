const SITE = "https://blog.exerra.xyz"

const actor = {
  "@context": [
    "https://www.w3.org/ns/activitystreams",
    "https://w3id.org/security/v1"
  ],
  "id": `${SITE}/activitypub/actor`,
  "type": "Application",
  "preferredUsername": "blog",
  "name": "Exerra's Blog",
  "summary": "Blog of Exerra, a full-stack developer from Latvia.",
  "url": SITE,
  "inbox": `${SITE}/activitypub/inbox`,
  "outbox": `${SITE}/activitypub/outbox`,
  "followers": `${SITE}/activitypub/followers`,
  "icon": {
    "type": "Image",
    "mediaType": "image/png",
    "url": "https://cdn.exerra.xyz/png/pfp.png"
  },
  "image": {
    "type": "Image",
    "mediaType": "image/png",
    "url": "https://cdn.exerra.xyz/png/mockups/exerra-blog_1x.png"
  }
}

export const get = () => ({
  body: JSON.stringify(actor)
})
