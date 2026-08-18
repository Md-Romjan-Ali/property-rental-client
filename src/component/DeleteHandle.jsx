"use client"
import { deleteData, deleteFavouriteData } from '@/lib/tanant/tanantdelete';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Button, Modal } from "@heroui/react";
import { BiRocket } from 'react-icons/bi';
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
                                <Modal.Heading>Are You Sure!</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Are you sure you want to parmanently delete this property
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='ghost' className="w-full" slot="close">
                                    Close
                                </Button>
                                <Button variant='primary' onClick={HandleDelete} slot={'close'}>
                                    Confirm
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default DeleteHandle;
