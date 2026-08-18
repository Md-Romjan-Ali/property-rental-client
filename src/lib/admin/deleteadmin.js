import { deleteFetchData } from "../tanant/tanantdelete"

export const deleteUserData = async (id) => {
    return deleteFetchData(`/api/deleteuser/${id}`)
}