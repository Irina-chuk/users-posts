import BuyerItem from "../buyer_item/buyer_item";


import "./buyers_list.scss";
const BuyersList = ({users}) => {
    
    const elements = users.slice(0,4).map(item => {
        const {id} = item;
        return (
            <BuyerItem key={id} data={item}/>
        )
    });
    return (
        <div className="buyers__list">
            {elements}
        </div> 
)
}
export default BuyersList;