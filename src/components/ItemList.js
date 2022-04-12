import Item from "./Item";

const ItemList = ({ pelis }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pelis.map((peli) => (
        <Item {...peli} key={peli.id} />
      ))}
    </div>
  );
};
export default ItemList;
