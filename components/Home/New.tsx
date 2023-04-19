interface Iprops {
  img: string;
  name: string;
  range: number;
  items: {
    img: string;
    price: number;
  }[];
}
export default function New(collection: Iprops) {
  return (
    <section className="new section" id="new">
      <h2 className="section-title">NIEUWE COLLECTIE</h2>
      <div className="new__container bd-grid">
        
        {collection.items.map((shoe, i) => (
          <div className="new__sneaker" key={i}>
            <div className="new__sneaker-card">
              <img src={shoe.img} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <div className="button">Add To Cart</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
