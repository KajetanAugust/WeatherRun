export default function formatLocation (locationInfo: Record<any, any>) {
    return `${locationInfo.text}, ${locationInfo.context[locationInfo.context.length - 1].text}`
}
