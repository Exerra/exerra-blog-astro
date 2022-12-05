import rss from "@astrojs/rss"

let postsImport: any = import.meta.glob("../data/blog-posts/*.md", { eager: true })
let posts = Object.values(postsImport)
posts = posts.sort((a: any, b: any) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf());

const determineMimetype = (url: string): string => {
    let type: string = ""

    if (url.endsWith(".jpg")) type = "image/jpeg"
    if (url.endsWith(".webp")) type = "image/webp"
    if (url.endsWith(".png")) type = "image/png"

    return type
}

export const get = () => rss({
    title: "Exerra Blog",
    description: "Exera blog",
    site: import.meta.env.SITE,
    items: posts.map((post: any) => {
        let data = {
            link: `https://blog.exerra.xyz/blog/${post.file.split('/').pop()?.split('.').shift()}`,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.publishDate,
            description: post.compiledContent(),
            customData: ""
        }

        if (post.frontmatter.image) {
            let img: string = post.frontmatter.image

            if (img.startsWith("/")) img = `https://blog.exerra.xyz` + img

            data.customData = `<enclosure url="${img}" length="742526" type="${determineMimetype(img)}"/>`
        }

        return data

    })
})