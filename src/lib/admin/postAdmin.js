import { authToken } from "../token"
const serverUri = process.env.NEXT_PUBLIC_API_URL

export const postData = async (endPoint, data) => {
    const token = await authToken()
    const res = await fetch(`${serverUri}${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}

export const postRejectMessage = async (message) => {
    return postData(`/api/rejectowner`, message)
}