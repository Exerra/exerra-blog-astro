import type { APIRoute } from "astro"

export const get: APIRoute = async ({ params, request }) => {
    console.log("actor")

    return new Response(JSON.stringify({
        "@context": [
            "https://www.w3.org/ns/activitystreams",
            "https://w3id.org/security/v1"
        ],
        id: "https://dibella3000.exerra.xyz/.well-known/actor",
        type: "Person",
        // following: "https://indieweb.social/users/exerra/following",
        // followers: "https://indieweb.social/users/exerra/followers",
        inbox: "https://dibella3000.exerra.xyz/.well-known/actor",
        // outbox: "https://indieweb.social/users/exerra/outbox",
        // featured: "https://indieweb.social/users/exerra/collections/featured",
        // featuredTags: "https://indieweb.social/users/exerra/collections/tags",
        preferredUsername: "exerra",
        // name: "Exerra's blog",
        // summary: "<p>ba pararara beee ba pa para pum</p>",
        publicKey: {
            id: "https://dibella3000.exerra.xyz/.well-known/actor#main-key",
            owner: "https://dibella3000.exerra.xyz/.well-known/actor",
            publicKeyPem: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6OILN5c1x20Ihbf3xwNF\nzyUcMrD7VWbYTvF0syLAW94Nu1M3fzDwNS/9+G/dOKJO2N624MAJz27Tq6+4tjPE\nmn4pccX6L0k8FddaFoAmFFarTmuhvu1Zl3I2Rm9E1HabQ4baFHSfM4Bj3Fz5aWBU\npriEFfE5+raMSymNOYqwHBlvEuRhzLyCctpKhi/szPr5iejM2R4uMxbe6nni2tBN\n3wsEvMABPegg0vL/a22rAqSsXCdX+TpHHsRO2jgQfP08t0+VKoW8MhZ8UfwQfyZR\nhLYFrPaMiR0+e2/0KuICRjS+/55Z3WrxeADuRKmC/8+crLYrF7bK1kMRQQAW8hMF\n2wIDAQAB\n-----END PUBLIC KEY-----"
        }
        // url: "https://exerra.xyz/tos",
        // manuallyApprovesFollowers: false,
        // discoverable: true,
        // published: "2022-05-01T00:00:00Z",
        // tag: [],
        // attachment: [
        //     {
        //         type: "PropertyValue",
        //         name: "Blog",
        //         value: "<a href=\"https://blog.exerra.xyz\" target=\"_blank\" rel=\"nofollow noopener noreferrer me\"><span class=\"invisible\">https://</span><span class=\"\">blog.exerra.xyz</span><span class=\"invisible\"></span></a>"
        //     }
        // ],
        // endpoints: {
        //     "sharedInbox": "https://indieweb.social/inbox"
        // },
        // icon: {
        //     type: "Image",
        //     mediaType: "image/png",
        //     url: "https://share.exerra.xyz/8Klh8Q3.png"
        // }
    }))
}

export const post: APIRoute = async ({ params, request }) => {
    console.log("post actor")
    return new Response(JSON.stringify({ hah: "hah" }))
}