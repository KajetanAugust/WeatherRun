import { CgSmileMouthOpen, CgSmileNeutral, CgSmileSad, CgSmile, CgSmileNoMouth, CgSmileUpside } from "react-icons/cg";

const styles = {
    good: {
        color: '#06D6A0',
    },
    moderate: {
        color: '#FFD166',
    },
    sensitive: {
        color: '#ED6A5A',
    },
    unhealthy: {
        color: '#E65F5C',
    },
    veryUnhealthy: {
        color: '#231651',
    },
    hazardous: {
        color: '#580C1F',
    },
    notFound: {
        color: 'rgba(255,255,255)',
    }
}

export function aqiFaceChecker (aqi) {
    if (aqi <= 50) {
        return <CgSmileMouthOpen style={styles.good} className='aqi-face' />
    } else if (aqi >= 51 && aqi <= 100) {
        return <CgSmile style={styles.moderate} className='aqi-face' />
    } else if (aqi >= 101 && aqi <= 150) {
        return <CgSmileNeutral style={styles.sensitive} className='aqi-face' />
    } else if (aqi >= 151 && aqi <= 200) {
        return <CgSmileSad style={styles.unhealthy} className='aqi-face' />
    } else if (aqi >= 201 && aqi <= 300) {
        return <CgSmileSad style={styles.veryUnhealthy} className='aqi-face' />
    } else if (aqi >= 300) {
        return <CgSmileNoMouth style={styles.hazardous} className='aqi-face' />
    } else if (typeof aqi !== 'number') {
        return <CgSmileUpside style={styles.notFound} className='aqi-face' />
    }
}
