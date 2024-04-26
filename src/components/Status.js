function Status({items}) {
  if(!items.length)return <p><em>Start adding some items to your packing list</em></p>
  const numOfItems = items.length;
  const packed = items.filter(it => it.packed).length;
  const percentage = Math.round(packed/numOfItems*100);
  return (
    <footer className="status">
      <em>
        {percentage <100 ?
     ` 💼 You have ${numOfItems} items on your list, and you already packed ${packed} (${percentage}%)` : `You get everything! ready to go `}
      </em>
    </footer>
  );
}
export default Status;