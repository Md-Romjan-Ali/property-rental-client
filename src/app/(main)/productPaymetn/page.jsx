import { stripe } from '@/lib/stripe'
import { bookingPost } from '@/lib/tanant/tanantpost'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        metadata,
        customer_details: { email: customerEmail }
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }
    const bookings = {
        ...metadata,
        status: 'Pending',
        payStatus: 'paid'
    }

    if (status === 'complete') {
        const booking = await bookingPost(bookings)
        console.log(booking, 'from paymet succews page');
        return (
            <section id="success">
                <p>
                    We appreciate your business! A confirmation email will be sent to{' '}
                    {customerEmail}. If you have any questions, please email{' '}
                    <a href="mailto:orders@example.com">orders@example.com</a>.
                </p>
            </section>
        )
    }
}