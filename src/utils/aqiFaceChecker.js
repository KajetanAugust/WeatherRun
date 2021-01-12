
import {
    RiEmotionLaughLine,
    RiEmotionLine,
    RiEmotionHappyLine,
    RiEmotionNormalLine,
    RiEmotionUnhappyLine,
    RiEmotionSadLine
} from "react-icons/ri";

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
        return <RiEmotionLine style={styles.good} className='aqi-face' />
    } else if (aqi >= 51 && aqi <= 100) {
        return <RiEmotionHappyLine style={styles.moderate} className='aqi-face' />
    } else if (aqi >= 101 && aqi <= 150) {
        return <RiEmotionNormalLine style={styles.sensitive} className='aqi-face' />
    } else if (aqi >= 151 && aqi <= 200) {
        return <RiEmotionUnhappyLine style={styles.unhealthy} className='aqi-face' />
    } else if (aqi >= 201 && aqi <= 300) {
        return <RiEmotionUnhappyLine style={styles.veryUnhealthy} className='aqi-face' />
    } else if (aqi >= 300) {
        return <RiEmotionSadLine style={styles.hazardous} className='aqi-face' />
    } else if (typeof aqi !== 'number') {
        return <RiEmotionNormalLine style={styles.notFound} className='aqi-face' />
    }
}
