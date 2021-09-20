import "reflect-metadata";
import { Container } from "inversify";
import { iFizzBuzzApi } from "../interfaces/iFizzbuzz";
import { FizzBuzzHttpApi, FizzBuzzLocalApi } from "../Entities";
import TYPES from "../constants/types"
import TAGS from "../constants/tags"


const container:Container = new Container();

//todo: add bindings
container.bind<iFizzBuzzApi>(TYPES.FIZZBUZZAPI).to(FizzBuzzHttpApi).whenTargetTagged(TYPES.FIZZBUZZAPI, TAGS.HTTPCLIENT);
container.bind<iFizzBuzzApi>(TYPES.FIZZBUZZAPI).to(FizzBuzzLocalApi).whenTargetTagged(TYPES.FIZZBUZZAPI, TAGS.LOCALCLIENT);

export default container;