import mcData from '../data/mcdonalds.json'
import CountUp from 'react-countup'
import './mapinfo.css'
import { Link } from 'react-router-dom'

export default function MapInfo() {

    const data = mcData

    const sayHello = (e) => {
        e.preventDefault()
        console.log('hello')
      }

    return (
        <div className='mapInfo'>
            <h2>
                Zwerfinator is al {new Date().getFullYear() - 2018} jaar bezig en heeft
            </h2>
            <h1><CountUp start={0} end={data.length} duration={3} useEasing={true}/></h1>
            <h2>stukken afval verzameld</h2>

            <p>
            Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem
            </p>

            <Link to='/'>Zie meer</Link>
        </div>
    )
}