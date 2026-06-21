import { authClient } from "../auth-client"

const serverUri = process.env.NEXT_PUBLIC_API_URL
const { data: token } = await authClient.token()
export const bookingPost = async (booking) => {
    const res = await fetch(`${serverUri}/api/postbooking`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(booking)
    })
    return await res.json()
}
// add favourite
export const favouritePost = async (properties) => {
    const res = await fetch(`${serverUri}/api/favourite`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(properties)
    })
    return await res.json()
}