import React, { useState } from 'react';
import Solakuva from './assets/images/click.png'

const Sola = () => {
  const [sola, setSola] = useState(0);

  const handleClick = () => {
    setSola(sola + 1)
  }

    return(
      <div className="Sola">
        <h1>{ sola } Solaa</h1>
        <button onClick={handleClick}>
          <img src={Solakuva} />
        </button>
      </div>
    )
}

export default Sola;
