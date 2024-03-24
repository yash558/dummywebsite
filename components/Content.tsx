import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const Content = () => {
    return (
        <div>
            <StickyScroll content={
                [{
                    title: "This is a title",
                    description: "This is a description",
                    content: <p>This is a content</p>
                }, {
                    title: "This is another title",
                    description: "This is another description",
                    content: <p>This is another content</p>
                }, {
                    title: "This is a third title",
                    description: "This is a third description",
                    content: <p>This is a third content</p>
                }
                ]
            } />

        </div>
    )
}

export default Content