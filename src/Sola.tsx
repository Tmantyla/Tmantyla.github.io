import Solakuva from './assets/images/click.png'

const Sola = () => {
  const handleClick = () => {
    console.log("click");
  }

    return(
      <div className="Sola">
        <h1>Solaa</h1>
        <button onClick={handleClick}>
          <img src={Solakuva} />
        </button>
      </div>
    )
}

export default Sola;
