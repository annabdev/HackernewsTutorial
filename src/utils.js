function timeDifference(current, previous) {
    const milliSecondsPerMinute = 60 * 1000
    const milliSecondsPerHour = milliSecondsPerMinute * 60
    const milliSecondsPerday = milliSecondsPerHour * 24
    const milliSecondsPerMonth = milliSecondsPerday * 30
    const milliSecondsPerYear = milliSecondsPerday * 365

    const elapsed = current - previous

    if (elapsed < milliSecondsPerMinute / 3) {
        return 'just now'
    }

    if (elapsed < milliSecondsPerMinute) {
        return 'less than 1 min ago'
    } else if (elapsed < milliSecondsPerHour) {
        return Math.round(elapsed / milliSecondsPerMinute) + ' min ago'
    } else if (elapsed < milliSecondsPerday) {
        return Math.round(elapsed / milliSecondsPerHour) + ' h ago'
    } else if (elapsed < milliSecondsPerMonth) {
        return Math.round(elapsed /milliSecondsPerday) + " days ago"
    } else if (elapsed < milliSecondsPerYear) {
        return Math.round(elapsed / milliSecondsPerMonth) + ' mo ago'
    } {
        return Math.round(elapsed / milliSecondsPerYear) + ' years ago'
    }
}

export function timeDifferenceForDate(date) {
    const now = new Date().getTime()
    const updated = new Date(date).getTime()
    return timeDifference(now, updated)
}