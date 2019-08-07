import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from  './componentes/PrimeiroComponente'
// import CompA, {CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        {/* {<PrimeiroComponente valor="Olá mundo!" />} */}
        {/* <CompA valor="Olá, eu sou A!" />
        <B valor="B na área!" /> */}
        {/* {<MultiElementos />} */}
        {/* <Familia sobrenome='Pereira'>
            <Membro nome='Andre' />
            <Membro nome='Mariana' />
        </Familia> */}
        {/* <ComponenteComFuncao /> */}
        {/* <FamiliaSilva /> */}
        {/* < Pai /> */}
        {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
        {/* <Contador numeroInicial={0} /> */}
        <Hook />
    </div>
    , element)

// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(jsx, element)