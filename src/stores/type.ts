export enum ApiStatus{
    INITIAL,
    LOADING,
    SUCESS,
    FAILURE
}
export interface userDetail{
    username:string,
    password:string
}
interface ChannelName{
    name:string,
    profile_image_url:string
}
export interface VideoDetailInterface{
    channel:ChannelName,
    id:string,
    published_at:string,
    thumbnail_url:string,
    title:string,
    view_count:string
}
interface IndividualChannelName extends ChannelName{
    subscriber_count:string
}
export interface IndividualVideoDetailInterface{
    channel:IndividualChannelName,
    id:string,
    description:string,
    published_at:string,
    thumbnail_url:string,
    title:string,
    view_count:string,
    video_url:string
}