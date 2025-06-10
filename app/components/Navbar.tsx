"use client"
import { House, SendToBack } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <nav
                className={`w-11/12 md:w-2/3 m-auto h-16 rounded-lg shadow-lg bg-white fixed top-8 left-0 right-0 flex items-center px-5 transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-28'}`}
            >
                <Link href="/" className="text-lg md:text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300 inline-flex items-center gap-3">
                    <svg fill="#4f46e5" className="mx-auto w-6 h-6" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.22 22.836c-3.813-.103-4.17-.19-5.63-1.37-.902-.728-1.177-1.045-2.301-2.662-1.236-1.776-4.775-6.977-4.98-7.319-.1-.165-.436-.691-.746-1.168S0 9.362 0 9.255c0-.107.605-.505 1.345-.886 1.163-.598 1.53-.7 2.719-.754 1.346-.061 1.402-.047 2.687.689 1.28.732 1.352.811 2.868 3.13a254.428 254.428 0 0 1 2.016 3.12c.253.407.649.864.88 1.016.693.454 1.007.31 4.724-2.166 1.707-1.138 3.206-3.707 3.73-6.39.194-.997.24-1.6.13-1.71-.186-.187-1.08.27-3.569 1.826-3.586 2.24-6.161 3.79-6.298 3.79-.2 0-.674-.742-.803-1.26-.095-.375.056-.517 1.438-1.361 4.042-2.467 5.101-3.12 5.751-3.54 2.63-1.7 5.91-3.655 6.133-3.655.316 0 .318.034.081 1.247-.101.52-.34 1.89-.53 3.048-.753 4.58-1.775 6.872-3.952 8.86-.818.747-3.33 2.399-4.753 3.124-1.194.61-2.618.455-3.532-.382-.23-.21-1.307-1.733-2.393-3.384-1.086-1.65-2.243-3.206-2.571-3.457-.754-.575-2.33-.803-2.851-.412-.437.328-.298.661 1.1 2.638.554.785 1.191 1.743 1.416 2.129.82 1.413 3.19 4.619 3.864 5.227 1.059.957 2.046 1.171 5.396 1.171 2.278 0 2.885-.05 2.959-.242.051-.134-.188-.682-.531-1.22-.747-1.166-.766-1.382-.163-1.856.888-.698 1.021-.587 2.952 2.463.099.157.483.742.854 1.301.371.56.713 1.117.76 1.239.108.281-2.747.37-7.637.238z"></path></g></svg>
                    <span >Trends</span>
                </Link>

                {/* <ul className="flex items-center gap-5 sm:gap-10 m-auto">
                    <li><Link href="/" className="text-xs sm:text-base text-blue-600 font-semibold hover:text-blue-800 transition duration-300 p-2 sm:p-2.5 sm:px-3.5 bg-slate-100 rounded-full cursor-pointer inline-flex items-center gap-2 sm:gap-3">
                        <House size={18} className="text-blue-600" />
                        Home</Link></li>
                    <li><Link href="/post-maker" className="text-xs sm:text-base text-gray-800 font-semibold hover:text-gray-600 transition duration-300 p-2 sm:p-2.5 sm:px-3.5 hover:bg-slate-100 rounded-full cursor-pointer inline-flex items-center gap-2 sm:gap-3">
                        <SendToBack size={18} />
                        Post Maker</Link></li>
                </ul> */}
            </nav>
        </>
    )
}

export default Navbar
