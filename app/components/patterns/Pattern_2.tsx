
const Pattern_2 = ({ color }: { color: string }) => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' /><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z' strokeWidth='1' stroke={color} fill='none' /></pattern></defs><rect width='100%' height='100%' transform='translate(0,0)' fill='url(#b)' /></svg>
    )
}

export default Pattern_2
