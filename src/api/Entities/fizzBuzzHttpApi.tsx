import { iFizzBuzzApi } from "../interfaces/iFizzbuzz"


export class FizzBuzzHttpApi implements iFizzBuzzApi{
    constructor(){
        //initalize an http client
    }

    async testFizzBuzz(numericInput:number): Promise<string> {
        let response:string = ''
        if(numericInput <= 0) return response;

        response = `under development`;

        return response;
    }
}