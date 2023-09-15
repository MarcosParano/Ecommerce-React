import Item from "../Item/Item";
import "./ItemList.css";
function ItemList(props) {
  return (
    <div className="ItemList">
      {props.products.map((item) => (
        <>
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            info={item.info}
            image={item.image}
            type={item.type}
            price={item.price}
          ></Item>
        </>
      ))}
    </div>
  );
}
export default ItemList;
