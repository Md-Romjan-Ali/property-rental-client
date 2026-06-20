const serverUrl = process.env.NEXT_PUBLIC_API_URL
export const getBookingData = async (email) => {
    const res = await fetch(`${serverUrl}/api/postbooking?email=${email}`)
    return await res.json()
}
// get favourite
export const getFavourite = async (userId) => {
    const res = await fetch(`${serverUrl}/api/favourite?userId=${userId}`)
    return await res.json()
}