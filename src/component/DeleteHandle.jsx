"use client"
import { deleteData, deleteFavouriteData } from '@/lib/tanant/tanantdelete';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DeleteHandle = ({ id }) => {
    const router = useRouter()
    const HandleDelete = async () => {
        await Promise.allSettled([
            deleteData(id),
            deleteFavouriteData(id)
        ]);

        router.refresh()
        toast.error('this data permanently deleted')
    }
    return (
        <div>
            <Button variant='danger-soft' onClick={HandleDelete}><FaTrash size={20} color='red' /></Button>
        </div>
    );
};

export default DeleteHandle;
