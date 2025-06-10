
const Pattern_7 = ({ color }: { color: string }) => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='g' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' /><path d='M3.25 10h13.5M10 3.25v13.5' strokeLinecap='square' strokeWidth='1' stroke={color} fill='none' /></pattern></defs><rect width='100%' height='100%' transform='translate(0,0)' fill='url(#g)' /></svg>
    )
}

export default Pattern_7
