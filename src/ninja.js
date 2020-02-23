import React from 'react';
import './ninja.css'
const Ninjas = (props)=> {
    
        const { list } = props;
        // el metodo map crea array with iterable objects
        const lista = list.map(ninja=>{
            return ninja.age > 2 ? (
                <div className="lista" key={ninja.id} >
                        <p>Nombre:{ninja.name}</p>
                        <p>Edad {ninja.age} </p>
                        <p>Belt: {ninja.belt} </p>
                        <p>id: {ninja.id}</p>
                    </div>
            ) : null;
        })
        return(
            /**
             * could be a posibility
             * {
                    list.map(ninja=>{
                        return ninja.age > 24 ? (
                        <div className="ninja" key={ninja.id} >
                            <p>{ninja.name}</p>
                            <p> {ninja.age} </p>
                            <p> {ninja.belt} </p>
                        </div>
                        ) : null;
                    })
                }
             */
            <div>
                {lista}
            </div>
        )
    
}
export default Ninjas