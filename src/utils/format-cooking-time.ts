export function formatCookingDuration(durationInMinutes: number): string {
    if (durationInMinutes < 2) {
        return `${durationInMinutes} minute`
    }

    return `${durationInMinutes} minutes`
}

export function shortFormatCookingDuration(durationInMinutes: number): string {
    return `${durationInMinutes}min`
}
