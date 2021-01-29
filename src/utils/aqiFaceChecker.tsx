
import {
    RiEmotionLine,
    RiEmotionHappyLine,
    RiEmotionNormalLine,
    RiEmotionUnhappyLine,
    RiEmotionSadLine
} from "react-icons/ri";

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

export function aqiFaceChecker (aqi: number, size:string = '') {
    if (aqi <= 50) {
        return <RiEmotionLine style={styles.good} className={`aqi-face${size}`} />
    } else if (aqi >= 51 && aqi <= 100) {
        return <RiEmotionHappyLine style={styles.moderate} className={`aqi-face${size}`} />
    } else if (aqi >= 101 && aqi <= 150) {
        return <RiEmotionNormalLine style={styles.sensitive} className={`aqi-face${size}`} />
    } else if (aqi >= 151 && aqi <= 200) {
        return <RiEmotionUnhappyLine style={styles.unhealthy} className={`aqi-face${size}`} />
    } else if (aqi >= 201 && aqi <= 300) {
        return <RiEmotionUnhappyLine style={styles.veryUnhealthy} className={`aqi-face${size}`} />
    } else if (aqi >= 300) {
        return <RiEmotionSadLine style={styles.hazardous} className={`aqi-face${size}`} />
    } else {
        return <RiEmotionNormalLine style={styles.notFound} className={`aqi-face${size}`} />
    }
}
