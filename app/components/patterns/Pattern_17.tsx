
const Pattern_17 = ({ color }: { color: string }) => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='q' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' /><path d='M40 30H20m20 20H0m60-40H20m30 10v40M10 0v40M0 40V0h20v40m40-20v40H40V20m0 40H0V40h40M20 0h40v20H20' strokeWidth='1' stroke={color} fill='none' /></pattern></defs><rect width='100%' height='100%' transform='translate(0,0)' fill='url(#q)' /></svg>
    )
}

export default Pattern_17
