import * as React from "react";
import { Button } from "react-bootstrap"

export const FizzBuzz = () => {
    const [fizzBuzzInput, setFizzBuzzInput] = React.useState("0");
    const [fizzBuzzResult, setFizzBuzzResult] = React.useState("");
    const numericRegex = /^[0-9]*$/

    function testFizzBuzz(input:string):string {
        const numericInput: number = parseInt(input);
        let response:string = ''
        if(numericInput % 3 === 0) {
            response += 'fizz';
        }

        if(numericInput % 5 === 0){
            response += 'buzz';
        }

        return response;
    }

    return(
        <div>
            <h1>welcome to Fizzbuzz</h1>
            <p>I wrote this page to demonstrate a simple http web reqeust to an API to solve a mundain bussiness request.  Given a number as input, the api will process the number, and reply with Fizz if the number is a multiple of 3, and buzz if the number is a multiple of 5</p>
            <div>
                <input value={fizzBuzzInput} onChange={ (event) => {
                    if (numericRegex.test(event.target.value)) {
                        setFizzBuzzInput(event.target.value);                        
                    } else {
                        event.preventDefault();
                    }
                } }/>
                <Button onClick={() => setFizzBuzzResult(testFizzBuzz(fizzBuzzInput))}>Submit</Button>
            </div>
            <div>
                Result: {fizzBuzzResult}
            </div>
        </div>
    );
}