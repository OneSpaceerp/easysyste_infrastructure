import { Metadata } from 'next'
import PaymentServiceClient from './PaymentServiceClient'

export const metadata: Metadata = {
    title: 'Hosted E-Commerce Payment Gateway — In-Country',
    description:
        'Every online payment processed inside the country. Card data, tokens, keys and logs never leave. Hosted on-premises, in an approved local cloud, or hybrid, under the bank’s own brand.',
}

export default function PaymentServicePage() {
    return <PaymentServiceClient />
}
