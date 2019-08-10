import React from 'react'

// const frase = "Primeiro Componente! (Arrow)"
const isLegal = true

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{1+1}</h2>
        <p>{isLegal ? 'Sim' : 'Não'}</p>
    </div>

// export default () => 
//     <div>
//         <h1>{frase}</h1>
//     </div>

// export default function () {
//     return <h1>Primeiro Componente!</h1>
// }

// function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro
