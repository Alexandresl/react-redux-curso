import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(0)
    const [parOuImpar, setParOuImpar] = useState('Par')
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('par') : setParOuImpar('impar')
    }, [contador])
    return (
        <div>
            <h1>{contador} - {parOuImpar}</h1>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}