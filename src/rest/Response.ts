export default class Response {
    constructor(public response: Record<any, any>, public status: number, public route: string) {}
}
