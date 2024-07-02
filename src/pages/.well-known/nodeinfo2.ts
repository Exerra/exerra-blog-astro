import type { APIRoute } from "astro"

export const get: APIRoute = async ({ params, request }) => {
    console.log("nodeinfo2")

    return new Response(JSON.stringify({
        version: "2.0",
        software: {
            name: "Exerra's blog - PRERELEASE FEDI VERSION",
            version: "0.0.1"
        },
        protocols: [
            "activitypub"
        ],
        services: {
            outbound: [],
            inbound: []
        },
        usage: {
            users: {
                total: 1,
                activeMonth: 1,
                activeHalfyear: 1
            },
            localPosts: 10
        },
        openRegistrations: false,
        metadata: {}
    }))
}

export const post: APIRoute = async ({ params, request }) => {
    console.log("post nodeinfo")
    return new Response(JSON.stringify({ hah: "hah" }))
}