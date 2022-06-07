import { ArrowBack, ArrowForward } from '@material-ui/icons'
import React,{useState} from 'react'
import { Data } from './Data'
import Header from './Header'
import './styles/Section.scss'

const Section = ({slides}) => {
    const [first, setFirst] = useState(0)

    const length = slides.length

    return (
        <section>
            <div className="slide">
                
            </div>
        </section>
    )
}

export default Section