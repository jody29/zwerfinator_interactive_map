import MapInfo from "../components/mapInfo"
import afvalPic from '../afval_bijelkaar3.png'
import './amount.css'

const Amount = () => {
    return (
        <div className="amount" style={{
            backgroundImage: `url(${afvalPic})`
        }}>
            <MapInfo />
        </div>
    )
}

export default Amount