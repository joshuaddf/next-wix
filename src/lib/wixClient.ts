import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections } from "@wix/data";

export const wixClient = createClient({
    modules: { collections },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    })
})