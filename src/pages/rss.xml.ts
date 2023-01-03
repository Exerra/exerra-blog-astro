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
    title: "Exerra's Blog",
    description: "This is the blog of Exerra, A full-stack developer from Latvia.",
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

            if (img.startsWith("/")) img = `https://blog.exerra.xyz` + img // if images are not absolute (http(s)://[domain]/[file]), we can safely assume it is available under https://blog.exerra.xyz/[slug] 

            //data.customData = `<enclosure url="${img}" length="742526" type="${determineMimetype(img)}"/>` // I have no idea how to calculate the length, so I won't. Pretty sure the length attribute isnt used in rss readers anyway
            data.customData = `<media_content width="560" url="${img}" />`
        }

        return data

    })
})