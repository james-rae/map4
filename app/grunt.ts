export class PigDog {
    name: string;

    belly: number;

    introduce() {
        console.log(`I am ${this.name} with belly ${this.belly}`);
    }
}