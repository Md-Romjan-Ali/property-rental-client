import { authToken } from "../token"

const serverUrl = process.env.NEXT_PUBLIC_API_URL

export const deleteFetchData = async (endPoint) => {
    const token = await authToken()
    const res = await fetch(`${serverUrl}${endPoint}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return await res.json()
}

export const deleteData = async (id) => {
    return deleteFetchData(`/api/my/booking/${id}`)
}
export const deleteFavouriteData = async (id) => {
    return deleteFetchData(`/api/my/favourite/${id}`)
}

