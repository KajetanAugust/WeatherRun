
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
    if (aqi === 1) {
        return <RiEmotionLine style={styles.good} className={`aqi-face${size}`} />
    } else if (aqi === 2) {
        return <RiEmotionHappyLine style={styles.moderate} className={`aqi-face${size}`} />
    } else if (aqi === 3) {
        return <RiEmotionNormalLine style={styles.sensitive} className={`aqi-face${size}`} />
    } else if (aqi === 4) {
        return <RiEmotionUnhappyLine style={styles.unhealthy} className={`aqi-face${size}`} />
    } else if (aqi === 4) {
        return <RiEmotionUnhappyLine style={styles.veryUnhealthy} className={`aqi-face${size}`} />
    } else if (aqi === 5) {
        return <RiEmotionSadLine style={styles.hazardous} className={`aqi-face${size}`} />
    } else {
        return <RiEmotionNormalLine style={styles.notFound} className={`aqi-face${size}`} />
    }
}
