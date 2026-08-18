import { postData } from "../admin/postAdmin"


export const bookingPost = async (booking) => {
    return postData(`/api/postbooking`, booking)
}
// add favourite
export const favouritePost = async (properties) => {
    return postData(`/api/favourite`, properties)
}