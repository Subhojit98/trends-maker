'use client'
import { Switch } from "@/components/ui/switch"
import { patternsComponents } from "../data/patterns"
import { useDispatch, useSelector } from "react-redux"
import { setName, setUserName, setMessage, setBackgroundColor, setIsVerified, setDesignMode, setProfileImage, initialState, setPattern } from "../features/editor/editorSlice"
import { EditorState } from "../interface/types"
import HeadView from "./HeadView"
import { toPng } from "html-to-image"
import { toast } from "sonner"


function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


const Editor = () => {
    const download = require('downloadjs')

    const content = useSelector((state: EditorState) => state?.content || initialState.content);

    const { name, username, message, backgroundColor, designMode, isVerified } = content;

    const dispatch = useDispatch()

    const handleName = (e: any) => {
        dispatch(setName(e.target.value))
    }

    const handleUserName = (e: any) => {
        dispatch(setUserName(e.target.value))
    }

    const handelMessage = (e: any) => {
        dispatch(setMessage(e.target.value))
    }

    const handelModeSelect = (mode: any) => {
        if (mode) {
            dispatch(setDesignMode(mode))
        }
        else {
            dispatch(setDesignMode(mode))
        }
    }

    const handelVerified = (status: any) => {

        if (status) {
            dispatch(setIsVerified(status))
        }
        else {
            dispatch(setIsVerified(status))
        }

    }

    const handelBackground = (color: any) => {
        dispatch(setBackgroundColor(color.target.value))
    }

    const handelFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files

        if (file && file.length > 0) {
            const renderer = new FileReader()

            renderer.onload = () => {
                dispatch(setProfileImage(renderer.result as any))
            }

            renderer.readAsDataURL(file[0])
        }

        return null
    }

    const handelPattern = (pattern: any) => {
        dispatch(setPattern(pattern))
    }
    const handelDownload = async () => {

        const node = document.getElementById("banner-image")
        try {
            const dataUrl = await toPng(node as HTMLElement)
            download(dataUrl, `custom-trends-${generateUUID()}.png`)

            toast.success("Image downloaded successfully")

        } catch (error) {
            toast.error("Failed to download image.. Please try again")
            console.log(error);
        }

    }

    return (
        <main className="w-full h-full">

            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-10">How To Make Your Thought Go  Viral ?</h2>
                <p className="mt-2 text-xs px-5 sm:text-sm opacity-50">{`A perfect fit for  social media influencers and brands looking to build.`}</p>
            </div>
            < div className="flex justify-center flex-col xl:flex-row gap-14  mt-20 px-5 md:px-10" >
                <div className="w-full xl:w-[60%] overflow-x-auto 2xl:overflow-hidden h-[60vh] bg-white border border-neutral-400 rounded-xl relative p-5 flex lg:items-center flex-col justify-center">
                    <HeadView />

                    <button className="relative inline-block text-lg group mt-6 mx-auto" onClick={handelDownload}>
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Download</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                </div>

                <div className="w-full xl:w-1/2 max-h-[75vh] overflow-y-auto bg-white py-10 px-8 lg:px-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

                    <label className="text-lg sm:text-xl opacity-50">Name</label>
                    <input type="text" className="w-full h-14 border border-neutral-200 rounded-sm mt-5 p-5 outline-none" value={name} onChange={handleName} maxLength={25} />
                    <hr
                        className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />
                    < label className="text-lg sm:text-xl opacity-50">User Name</ label>
                    <input type="text" className="w-full h-14 border border-neutral-200 rounded-sm mt-5 p-5 outline-none" value={username} onChange={handleUserName} maxLength={20} />
                    <hr
                        className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />

                    <div className="relative mt-10">
                        <textarea
                            className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-neutral-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " value={message} onChange={handelMessage} maxLength={60}>
                        </textarea>
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Message
                        </label>

                    </div>
                    <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />


                    < label className="text-lg sm:text-xl mt-10 opacity-50">Apperence Mode</ label>
                    <div className="flex items-center my-5 mb-14 gap-10">
                        <div className="flex items-center">
                            <Switch
                                checked={designMode}
                                className="mr-3 scale-110"
                                onCheckedChange={handelModeSelect}
                            />
                            <label htmlFor="designMode" className="text-xs text-nowrap md:text-base">Dark Mode</label>
                        </div>
                        <div className="flex items-center">
                            <Switch
                                checked={isVerified}
                                className="mr-3 scale-110"
                                onCheckedChange={handelVerified}
                            />
                            <label htmlFor="designMode" className="text-xs text-nowrap md:text-base">Verified</label>
                        </div>
                    </div>
                    <hr
                        className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />
                    {/* Second Section -> */}

                    <div className="flex justify-between w-full">
                        <div className="w-full">
                            < label className="text-lg sm:text-xl opacity-50">Profile Picture</ label>
                            {/* <Input type="file" accept="image/png, image/jpeg , image/jpg" className="w-full mt-5 mb-5 cursor-pointer border-gray-400" onChange={handelFile} /> */}

                            <div className="w-full p-10 mt-5 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
                                <div className="grid gap-1">
                                    <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="File">
                                            <path id="icon" d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z" fill="#0048ff" />
                                        </g>
                                    </svg>
                                    <h2 className="text-center text-gray-400   text-xs leading-4">PNG, JPG , JPEG</h2>
                                </div>
                                <div className="grid gap-2">
                                    <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">Drag and Drop your file here or</h4>
                                    <div className="flex items-center justify-center">
                                        <label>
                                            <input type="file" hidden accept="image/png, image/jpeg , image/jpg" onChange={handelFile} />
                                            <div className="flex w-28 h-9 px-2 flex-col bg-blue-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">Choose File</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-50" />

                    <div className="mt-5">
                        < label className="text-lg sm:text-xl opacity-50 mt-10">Background</ label>
                        <input type="color" className="w-full h-20 mt-4 rounded outline-none cursor-grab" value={backgroundColor} onChange={handelBackground}></input>
                    </div>
                    <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />


                    < label className="text-lg sm:text-xl opacity-50 mt-10">Background Patterns</ label>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-3">
                        {
                            patternsComponents.map((Pattern: any, index: number) => {
                                return <div key={index} className={`w-28 h-16 sm:w-32 sm:h-20 border border-black relative cursor-pointer hover:border-4 duration-150`} onClick={() => handelPattern(index + 1)}>
                                    <Pattern color={backgroundColor} />
                                </div>
                            })
                        }
                    </div>

                    <hr className="mt-10 mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400 opacity-20" />
                </div>
            </div >

        </main>
    )
}

export default Editor

