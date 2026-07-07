"use client"

import { userSession } from "@/lib/session";
import { favouritePost } from "@/lib/tanant/tanantpost";
import { Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddFavouriteHandle = ({ property }) => {
    const [loading, setLoading] = useState(false)
    const favouriteHandle = async () => {
        setLoading(true)
        const user = await userSession()
        const { _id, ...properties } = property
        const favProperty = {
            ...properties,
            userId: user?.id
        }
        const favourite = await favouritePost(favProperty)
        setLoading(false)
        toast.success('Add Favourite Successfully')
        console.log(favourite, 'from custom handle');
    }
    return (

        <Button variant="secondary" className="w-full py-3" onClick={favouriteHandle}>
            {loading ? 'loading...' : ' Add To Favourite'}
        </Button>
    );
};
export default AddFavouriteHandle;