import "./postItem_zoom.scss";
const PostItemZoom = ({data}) => {
    return(
        <div className="postItemZoom">
            <div className="postItemZoom__title">{data.title}</div>
            <div className="postItemZoom__text">{data.body.slice(0, 30)}...</div>
        </div>
    )
}
export default PostItemZoom;