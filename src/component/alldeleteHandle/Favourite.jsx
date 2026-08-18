"use client"

import { deleteFavouriteData } from '@/lib/tanant/tanantdelete';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const FavouriteDelete = ({ id }) => {
    const router = useRouter()
    const HandleDelete = async () => {
        const deletes = await deleteFavouriteData(id)
        console.log(deletes, 'from fortite dleete');
        router.refresh()
        toast.error('Permanently Deleted Favourite')
    }
    return (
        <div>
            <Button variant='danger-soft' onClick={HandleDelete}><FaTrash size={20} color='red' /></Button>
        </div>
    );
};

export default FavouriteDelete;
