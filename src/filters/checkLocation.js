const locationCheck = (longitude, latitude) => {
    if (latitude === 52.41550850887168 && longitude === 4.912068843841553) {
        return 'Amsterdam Noord'
    } else if (latitude === 52.35592584628199 && longitude === 4.7733235359191895) {
        return 'Amsterdam Osdorp'
    } else if (latitude === 52.64814747300471 && longitude === 5.034399032592773) {
        return 'Hoorn'
    } else if (latitude === 51.81754923732623 && longitude === 4.708693027496338) {
        return 'Dordrecht'
    } else if (latitude === 51.482331671357485 && longitude === 3.8956618309020996) {
        return 'Goes'
    } else if (latitude === 52.249533166080596 && longitude === 6.20403528213501) {
        return 'Deventer'
    } else if (latitude === 53.195923385025566 && longitude === 6.518604755401611) {
        return 'Eelderwolde'
    }
}

export default locationCheck