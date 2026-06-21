import { authClient } from "../auth-client"

const serverUrl = process.env.NEXT_PUBLIC_API_URL
const { data } = await authClient.token()
export const getBookingData = async (email) => {
    const res = await fetch(`${serverUrl}/api/postbooking?email=${email}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
    return await res.json()
}
// get favourite
export const getFavourite = async (userId) => {
    const res = await fetch(`${serverUrl}/api/favourite?userId=${userId}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
    return await res.json()
}