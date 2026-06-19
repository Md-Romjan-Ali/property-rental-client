"use client";

import { userSession } from "@/lib/session";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { BiEnvelope } from "react-icons/bi";

export function BookingModal({ userId }) {
    const [user, setUser] = useState()
    const bookingHandle = async (e) => {
        e.preventDefault()
        const user = await userSession()
        setUser(user)
        const formData = new FormData(e.target)
        const bookingInfo = Object.fromEntries(formData.entries())
        const bookingData = {
            ...bookingInfo,
            userId,
            status: 'Pending'
        }
        console.log(bookingData, 'from booking');
    }
    return (
        <Modal>
            <Button size="lg" className="w-full">Book Now</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEnvelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={bookingHandle} className="flex flex-col gap-4">
                                    <TextField className="w-full" value={user?.name} name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input required placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" value={user?.email} type="email" variant="secondary">
                                        <Label>Email</Label>
                                        <Input required placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                        <Label>Phone</Label>
                                        <Input required placeholder="Enter your phone number" />
                                    </TextField>

                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input required placeholder="Enter your message" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <form action="/api/checkout_sessions" method="POST">
                                            <section>
                                                <Button type="submit" role="link" slot="close">Confirm Book</Button>
                                            </section>
                                        </form>

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