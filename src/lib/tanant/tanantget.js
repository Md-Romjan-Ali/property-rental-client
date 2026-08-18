import { fetchGetData } from "../owner/ownerget"

export const getBookingData = async (email) => {
    return fetchGetData(`/api/postbooking?email=${email}`)
}
// get favourite
export const getFavourite = async (userId) => {
    return fetchGetData(`/api/favourite?userId=${userId}`)
}