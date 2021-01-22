
import {
    RiEmotionLine,
    RiEmotionHappyLine,
    RiEmotionNormalLine,
    RiEmotionUnhappyLine,
    RiEmotionSadLine
} from "react-icons/ri";


/*
gray #8D99AE
green #9CDE9F
yellow #F5B82E
orange #FF8C42
red #DB5461
violet #593959
dark red #2D1115
*/

const styles = {
    good: {
        color: '#9CDE9F',
    },
    moderate: {
        color: '#F5B82E',
    },
    sensitive: {
        color: '#FF8C42',
    },
    unhealthy: {
        color: '#DB5461',
    },
    veryUnhealthy: {
        color: '#593959',
    },
    hazardous: {
        color: '#2D1115',
    },
    notFound: {
        color: '#738290',
    }
}

export function aqiFaceChecker (aqi: number) {
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
    } else {
        return <RiEmotionNormalLine style={styles.notFound} className='aqi-face' />
    }
}
