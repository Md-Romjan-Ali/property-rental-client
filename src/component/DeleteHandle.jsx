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
            <Modal>
                <Button variant="danger-soft"><FaTrash size={20} color='red' /></Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Rocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    A beautiful, fast, and modern React UI library for building accessible and
                                    customizable web applications with ease.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="w-full" slot="close">
                                    Close
                                </Button>
                                <Button variant='danger-soft' onClick={HandleDelete} slot={'close'}>
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
