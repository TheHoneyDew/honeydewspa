

export interface iFizzBuzzApi{
    testFizzBuzz(numericInput:number):Promise<string>;
}

export class FizzBuzzClientSideApi implements iFizzBuzzApi{
    constructor(){

    }

    async testFizzBuzz(numericInput:number): Promise<string> {
        let response:string = ''
        if(numericInput <= 0) return response;

        if(numericInput % 3 === 0) {
            response += 'fizz';
        }

        if(numericInput % 5 === 0){
            response += 'buzz';
        }

        return response;
    }
}