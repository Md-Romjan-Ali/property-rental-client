import { updateFetchData } from "../admin/updateUser"

// update status
export const updateOwnerData = async (id, data) => {
    return updateFetchData(`/api/postbooking/${id}`, data)
}
// update all data
export const updateOwnerallData = async (id, data) => {
    return updateFetchData(`/api/updateowner/${id}`, data)
}


