const varNumber = 1;
const varStr = "Navbar";
const varNull = null;
const varBoolean = true;
const varUndefined = undefined;

const arr = ["Ланнистеры", "Баратеоны"];

const obj = {
  name: "Веларионы"
}

const JSXexample = () => {
    <>
    <nav className='navbar'>{varStr}</nav>
    <main>
      <p>{`${arr[1]}: Нам - Ярость`}</p>
      <p>{arr[0] === "Ланнистеры" ? "Услышь мой рёв!" : "Пламя и кровь"}</p>
      {/* {obj} */}
      {arr}
    {varNumber}
    {varNull}
    {varBoolean}
    {varUndefined}
      <label htmlFor="name">Name</label>
      <input id="name" disabled autoComplete='true' />
    </main>
    <footer>Footer</footer>
  </>
}

export default JSXexample