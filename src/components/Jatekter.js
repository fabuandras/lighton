import "./Jatekter.css"
import React from 'react'
import Lampak from './Lampak'

export default function Jatekter(props) {
    return (
        <>
            <h2>Játéktér</h2>
            <div className="jatekter">
                {
                    props.lista.map((allapot, index) => {

                        return (
                            <Lampak key={index} allapot={allapot} index={index} katt={props.katt} />
                        )
                    }

                    )
                }
            </div>
        </>
    )
}
