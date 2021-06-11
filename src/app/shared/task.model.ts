export class Task {
    constructor (
        public id: number | null,
        public description: string,
        public authorName: string,
        public authorEmail: string,
        public completed: boolean = false,
        public reopened: number = 0
    ) {}
}