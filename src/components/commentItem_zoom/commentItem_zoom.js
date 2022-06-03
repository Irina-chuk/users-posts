import "./commentItem_zoom.scss";
const CommentItemZoom = ({data}) => {
    return(
        <div className="comment__zoom__wrapper">
            <div className="comment__zoom__name">{data.name}</div>
            <div className="comment__zoom__email">{data.email}</div>
            <div className="comment__zoom__body">{data.body}</div>
        </div>
    )
}
export default CommentItemZoom;