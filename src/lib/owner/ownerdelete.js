import { authToken } from "../token"

const serverUri = process.env.NEXT_PUBLIC_API_URL
export const deleteOwnerData = async (id) => {
    const token = await authToken()
    const res = await fetch(`${serverUri}/api/ownerdata/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return await res.json()
}