const serverUrl = process.env.NEXT_PUBLIC_API_URL
export const getBookingData = async (email) => {
    const res = await fetch(`${serverUrl}/api/postbooking?email=${email}`)
    return await res.json()
}