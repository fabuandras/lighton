import "./Jatekter.css"
import React from 'react'
import Lampak from './Lampak'

export default function Jatekter(props) {
    return (
        <>
            <h2>Játéktér</h2>
            <div className="jatekter">
                {
                    props.lista.map((adat, index) => {

                        return (
                            <Lampak adat={adat} key={index} katt={props.katt} index={index} />
                        )
                    }

                    )
                }
            </div>
        </>
    )
}
