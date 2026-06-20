const serverUri = process.env.NEXT_PUBLIC_API_URL
export const getUserData = async () => {
    const res = await fetch(`${serverUri}/api/user`)
    return await res.json()
}
// all owner data
export const getOwner = async (owner) => {
    const res = await fetch(`${serverUri}/api/owner?role=${owner}`)
    return await res.json()
}
// total property
export const totalPorperty = async () => {
    const res = await fetch(`${serverUri}/api/ownerpost`)
    return await res.json()
}
// total booking
export const totalBookingsData = async () => {
    const res = await fetch(`${serverUri}/api/postbooking`)
    return await res.json()
}
