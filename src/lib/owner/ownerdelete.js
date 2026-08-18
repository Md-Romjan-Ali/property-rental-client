import { deleteFetchData } from "../tanant/tanantdelete"

export const deleteOwnerData = async (id) => {
    return deleteFetchData(`/api/ownerdata/${id}`)
}