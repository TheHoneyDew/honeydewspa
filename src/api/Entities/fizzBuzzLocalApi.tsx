
import { iFizzBuzzApi } from "../interfaces/iFizzbuzz"
import { injectable } from "inversify";

@injectable()
export class FizzBuzzLocalApi implements iFizzBuzzApi{
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