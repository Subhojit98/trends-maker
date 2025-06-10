import React from 'react'

const Pattern_8 = ({ color }: { color: string }) => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='h' patternUnits='userSpaceOnUse' width='32' height='32' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' /><path d='M37.657 10.343l-4.243 4.243m-2.828 2.828l-4.243 4.243m11.314 0l-4.243-4.243m-2.828-2.828l-4.243-4.243m-20.686 0l-4.243 4.243m-2.828 2.828l-4.243 4.243m11.314 0l-4.243-4.243m-2.828-2.828l-4.243-4.243' strokeLinecap='square' strokeWidth='1' stroke='#3E065F' fill='none' /><path d='M16-8v6m0 4v6m8-8h-6m-4 0H8m8 24v6m0 4v6m8-8h-6m-4 0H8' strokeLinecap='square' strokeWidth='1' stroke={color} fill='none' /></pattern></defs><rect width='100%' height='100%' transform='translate(0,0)' fill='url(#h)' /></svg>
    )
}

export default Pattern_8
