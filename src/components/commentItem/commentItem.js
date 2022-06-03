import "./commentItem.scss";
const CommentItem = ({data}) => {
    return(
        <div className="comment__wrapper">
            <div className="comment__name">{data.name}</div>
            <div className="comment__email">{data.email}</div>
            <div className="comment__body">{data.body}</div>
        </div>
    )
}
export default CommentItem;