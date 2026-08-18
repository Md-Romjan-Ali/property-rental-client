import { postData } from "../admin/postAdmin"


export const postOwnerProperty = async (ownerData) => {
    return postData(`/api/ownerpost`, ownerData)
}
// client ssays
export const clientSays = async (clientSay) => {
    return postData(`/api/clientsays`, clientSay)
}