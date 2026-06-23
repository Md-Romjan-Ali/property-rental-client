"use client";

import { postRejectMessage } from "@/lib/admin/postAdmin";
import { updateOwnerallData } from "@/lib/owner/ownerupdate";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function AdminRejectModal({ id }) {
    const router = useRouter()
    const rejectHandle = async (e) => {
        e.preventDefault()
        const message = {
            title: 'demo',
            messa: e.target.message.value
        }
        console.log(message, 'from messge');
        const data = { status: 'Rejected' };
        const reject = await updateOwnerallData(id, data);
        const rejectMessge = await postRejectMessage(message)
        console.log(reject, rejectMessge);

        router.refresh();
        toast.error('Rejected Booking')

    };
    return (
        <Modal>
            <Button variant="danger">Reject</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={rejectHandle} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input required placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input required placeholder="Enter your message" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Send Message</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}