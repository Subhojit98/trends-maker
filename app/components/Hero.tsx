import Image from "next/image"
import starSvg from "@/app/assets/svgs/svgviewer-output.svg"
import showcaseImage1 from "@/app/assets/images/Trends-1.png"
import showcaseImage2 from "@/app/assets/images/Trends-2.jpeg"
import showcaseImage3 from "@/app/assets/images/coustom-tweetheads-3.png"
import { Pen, Palette, Rainbow, Download } from "lucide-react"
const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <div className="flex flex-col items-center h-full">
                <h1 className="text-4xl sm:text-5xl font-bold flex flex-col gap-x-4 gap-y-1 sm:gap-y-5 text-center mt-52 sm:mt-60">
                    <span><span className="text-blue-600 inline-flex items-center">Best SSM Tool <Image src={starSvg} alt="star svg" className="mx-4 w-9 h-9" color="#fff" /></span>for Genuine</span>
                    <span className="">Social Media Engagement</span>
                </h1>
                <p className="mt-6 w-full sm:w-2/3 lg:w-[25%] px-5 text-sm text-center opacity-70">A perfect fit for social media influencers and brands looking to build  real, lasting connections with their audience.</p>

                <div className=" grid grid-cols-2 sm:grid-cols-4 px-3 gap-3 sm:gap-6 mt-60">
                    <span className="text-xs md:text-sm lg:text-base border border-neutral-500 py-2.5 font-semibold text-neutral-700 px-4 rounded-full inline-flex justify-center items-center gap-2 text-nowrap">
                        <Pen className="text-blue-600 w-4 h-4" />
                        Custom Text
                    </span>
                    <span className="text-xs md:text-sm lg:text-base border border-neutral-500 py-2.5 font-semibold text-neutral-700 px-4 rounded-full inline-flex justify-center items-center gap-2 text-nowrap">
                        <Palette className="text-blue-600 w-4 h-4" />
                        Background
                    </span>
                    <span className="text-xs md:text-sm lg:text-base border border-neutral-500 py-2.5 font-semibold text-neutral-700 px-4 rounded-full inline-flex justify-center items-center gap-2 text-nowrap">
                        <Rainbow className="text-blue-600 w-4 h-4" />
                        Cool Patterns
                    </span>
                    <span className="text-xs md:text-sm lg:text-base border border-neutral-500 py-2.5 font-semibold text-neutral-700 px-4 rounded-full inline-flex justify-center items-center gap-2 text-nowrap">
                        <Download className="text-blue-600 w-4 h-4" />
                        Downloadable
                    </span>
                </div>
            </div>

            {/* Images for hero section */}
            <Image
                src={showcaseImage2}
                alt="hero background"
                className="w-80 absolute top-[30%] right-40 hidden 2xl:block"
            />
            <Image
                src={showcaseImage1}
                alt="hero background"
                className="w-80 absolute top-[42%] left-40 hidden 2xl:block"
            />
            <Image
                src={showcaseImage3}
                alt="hero background"
                className="w-80 absolute top-[52%] sm:top-[52%] left-0 right-0 mx-auto"
            />
        </div>
    )
}

export default Hero
