import type { APIRoute } from "astro"

export const get: APIRoute = async ({ params, request }) => {
    console.log("webfinger")
    return new Response(JSON.stringify({
        subject: "acct:exerra@blog-fedi3000.exerra.xyz",
        // aliases: [
        //     "https://blog-fedi3000.exerra.xyz/@exerra"
        // ],
        links: [
            // {
            //     rel: "http://webfinger.net/rel/profile-page",
            //     type: "text/html",
            //     href: "https://blog-fedi3000.exerra.xyz/@exerra"
            // },
            {
                rel: "self",
                type: "application/activity+json",
                href: "https://blog-fedi3000.exerra.xyz/actor"
            }//,
            // {
            //     rel: "http://ostatus.org/schema/1.0/subscribe",
            //     template: "https://blog-fedi3000.exerra.xyz/authorize_interaction?uri={uri}"
            // }
        ]
    }))
}