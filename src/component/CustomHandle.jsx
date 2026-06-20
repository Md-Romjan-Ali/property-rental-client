"use client"

import { userSession } from "@/lib/session";
import { favouritePost } from "@/lib/tanant/tanantpost";
import { Button } from "@heroui/react";

const AddFavouriteHandle = ({ property }) => {
    const favouriteHandle = async () => {
        const user = await userSession()
        const properties = {
            ...property,
            userId: user?.id
        }
        const favourite = await favouritePost(properties)
        console.log(favourite, 'from custom handle');
    }
    return (

        <Button variant="secondary" className="w-full py-3" onClick={favouriteHandle}>
            Add To Favourite
        </Button>
    );
};
export default AddFavouriteHandle;