import type { APIRoute } from "astro"

export const get: APIRoute = async ({ params, request }) => {
    console.log("nodeinfo")

    return new Response(JSON.stringify({
        links: [
            {
                rel: "http://nodeinfo.diaspora.software/ns/schema/2.0",
                href: "https://blog-fedi3000.exerra.xyz/.well-known/nodeinfo2"
            }
        ]
    }))
}

export const post: APIRoute = async ({ params, request }) => {
    console.log("post nodeinfo")
    return new Response(JSON.stringify({ hah: "hah" }))
}