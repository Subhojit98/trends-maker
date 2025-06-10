export interface ContentState {
    name: string;
    username: string;
    message: string;
    profileImage: string;
    backgroundColor: string;
    pattern: number;
    designMode: boolean;
    isVerified: boolean;
}
export interface EditorState {
    content: ContentState;
}