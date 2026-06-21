import { authClient } from "../auth-client"

const serverUri = process.env.NEXT_PUBLIC_API_URL
const { data } = await authClient.token()
export const getOwnerData = async (userId) => {
    const res = await fetch(`${serverUri}/api/ownerpost?userId=${userId}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
    return await res.json()
}
// get single dat by id
export const getSingleOwnerDataById = async (id) => {
    const res = await fetch(`${serverUri}/api/ownerpost/${id}`)
    return await res.json()
}
// client sys
export const reviewFromCliet = async () => {
    const res = await fetch(`${serverUri}/api/clientsays`)
    return await res.json()
}
// my property booked
export const getBookedData = async (ownerId) => {
    const res = await fetch(`${serverUri}/api/postbooking?ownerId=${ownerId}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
    return await res.json()
}
