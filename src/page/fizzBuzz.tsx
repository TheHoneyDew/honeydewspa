import * as React from "react";
import { Button } from "react-bootstrap"

import { iFizzBuzzApi } from "../api/interfaces/iFizzbuzz";

import container from "../api/iocConfig/ioc_Container";
import TAGS from "../api/constants/tags";
import TYPES from "../api/constants/types"

export const FizzBuzz = () => {
    const [fizzBuzzInput, setFizzBuzzInput] = React.useState("0");
    const [fizzBuzzResult, setFizzBuzzResult] = React.useState("");
    const numericRegex = /^[0-9]*$/


    async function testFizzBuzz(input:string): Promise<string> {
        const numericInput: number = parseInt(input);  
        const fizzBuzzClient: iFizzBuzzApi = container.getTagged<iFizzBuzzApi>(TYPES.FIZZBUZZAPI, TYPES.FIZZBUZZAPI, TAGS.LOCALCLIENT);    

        return await fizzBuzzClient.testFizzBuzz(numericInput);
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
                <Button onClick={async () => setFizzBuzzResult(await testFizzBuzz(fizzBuzzInput))}>Submit</Button>
            </div>
            <div>
                Result: {fizzBuzzResult}
            </div>
        </div>
    );
}