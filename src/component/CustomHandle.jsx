"use client"

import { Button } from "@heroui/react";

const AddFavouriteHandle = ({ property }) => {
    const favouriteHandle = () => {
        console.log(property, 'from custom handle');
    }
    return (

        <Button variant="secondary" className="w-full py-3" onClick={favouriteHandle}>
            Add To Favourite
        </Button>
    );
};
export default AddFavouriteHandle;