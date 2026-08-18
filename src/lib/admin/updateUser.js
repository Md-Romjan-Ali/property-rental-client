
import { authToken } from "../token"

const serverUri = process.env.NEXT_PUBLIC_API_URL

export const updateFetchData = async (endPoint, data) => {
    const token = await authToken()
    const res = await fetch(`${serverUri}${endPoint}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}


export const updateUsers = async (id, data) => {
    return updateFetchData(`/api/updateuser/${id}`, data)
}