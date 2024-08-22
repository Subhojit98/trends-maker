import { createSlice } from "@reduxjs/toolkit";
import profilePicture from '@/app/assets/iamges/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg'
import { changeBackgroundColor, changeDesignMode, changeMessage, changeProfilePicture,changeName, changePattern, changeUserName, chnageVerificationStatus } from "../functions/editorFunctions";
import { EditorState} from '@/app/interface/types'

export const initialState:EditorState = {

    content: {
        name: "Jessica Doe",
        username: "@i_am_jessicadoe",
        message: "Hey there I am using tweetheads !",
        profileImage: profilePicture.src,
        backgroundColor: "#FBB901",
        pattern: 1,
        designMode: "dark",
        isVerified: "true"

    }
}

const editorSlice = createSlice({
    name:'editorContent',
    initialState,
    reducers:{
        setName: changeName,
        setUserName: changeUserName,
        setMessage: changeMessage,
        setProfileImage: changeProfilePicture,
        setBackgroundColor: changeBackgroundColor,
        setPattern: changePattern,
        setDesignMode: changeDesignMode,
        setIsVerified: chnageVerificationStatus
        
    }

})

export const {setName,setUserName,setMessage,setProfileImage,setBackgroundColor,setDesignMode,setIsVerified,setPattern} = editorSlice.actions
export default editorSlice.reducer