
export default interface Analytics {
    initialize(columns: Array<string>): void
    feed(row: Array<string>): void
}

