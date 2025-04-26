export const HandleGridData = (numOfColumns: number, Data: object[]): object[] => {
    const format: object[] = [...Data]
    let leftOverItems: number = format.length % numOfColumns
    let emptyId: number = 0

    while (leftOverItems !== 0) {
        format.push({ id: `empty${emptyId + 1}`, empty: true })
        emptyId++
        leftOverItems = format.length % numOfColumns
    }
    return format
}