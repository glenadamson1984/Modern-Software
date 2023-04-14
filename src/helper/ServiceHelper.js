export default class ServiceHelper {
    static getConfig() {
        return { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
        };
}
