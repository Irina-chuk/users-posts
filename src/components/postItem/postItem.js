import "./postItem.scss";
const PostItem = ({data}) => {
    return(
        <div className="postItem">
            <div className="postItem__title">{data.title}</div>
            <div className="postItem__text">{data.body.slice(0, 50)}...</div>
        </div>
    )
}
export default PostItem;