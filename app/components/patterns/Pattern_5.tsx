
const Pattern_5 = ({ color }: { color: string }) => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='e' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' /><path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z' strokeWidth='1' stroke={color} fill='none' /></pattern></defs><rect width='100%' height='100%' transform='translate(0,0)' fill='url(#e)' /></svg>
    )
}

export default Pattern_5
