import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [], addToCart = Function.prototype } = props;
  if (goods.length === 0) {
    return (
      <h3>Nothing found</h3>
    );
  }
  return (
    <div className="goods">
      {goods.map((item) => <GoodsItem key={item.mainId} {...item} addToCart={addToCart}/>)}
    </div>
  );
};

export default GoodsList;