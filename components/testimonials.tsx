import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteCards'

const Testimonial = () => {
    return (
        <div>
            <InfiniteMovingCards items={
                [{
                    quote: "This is a quote",
                    name: "John Doe",
                    title: "CEO"
                }, {
                    quote: "This is another quote",
                    name: "Jane Doe",
                    title: "CTO"
                }, {
                    quote: "This is a third quote",
                    name: "Jack Doe",
                    title: "CFO"
                }
                ]
            } />
        </div>
    )
}

export default Testimonial