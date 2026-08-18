import { fetchGetData } from "../owner/ownerget"

export const getUserData = async () => {
    return fetchGetData(`/api/user`)
}
// all owner data
export const getOwner = async (owner) => {
    return fetchGetData(`/api/owner?role=${owner}`)
}
// total property
export const totalPorperty = async () => {
    return fetchGetData(`/api/owneralldata`)
}
// total booking
export const totalBookingsData = async () => {
    return fetchGetData(`/api/postbooking`)
}
