"use server"
import { headers } from "next/headers"
import { auth } from "./auth"

export const tokens = async () => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    return token
}