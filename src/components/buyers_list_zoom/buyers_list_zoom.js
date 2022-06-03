import BuyerItemZoom from "../buyer_item_zoom/buyer_item_zoom";


import "./buyers_list_zoom.scss";
const BuyersListZoom = ({users}) => {
    
    const elements = users.slice(0,4).map(item => {
        const {id} = item;
        return (
            <BuyerItemZoom key={id} data={item}/>
        )
    });
    return (
        <div className="buyers__list">
            {elements}
        </div> 
)
}
export default BuyersListZoom;