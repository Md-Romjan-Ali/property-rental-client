"use client"

import { deleteFavouriteData } from '@/lib/tanant/tanantdelete';
import { Button, Modal } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { BiRocket } from 'react-icons/bi';
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

            <Modal>
                <Button variant="danger-soft"><FaTrash size={20} color='red' /></Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <BiRocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Are you sure!</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Are you sure, you want to delete you favourite Property?
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="w-full" variant='ghost' slot="close">
                                    Close
                                </Button>
                                <Button variant='primary' onClick={HandleDelete} slot={'close'}></Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default FavouriteDelete;
