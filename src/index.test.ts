import { sum } from "./index";
import {describe, it, expect} from "@jest/globals";

describe('Sum function', () =>{
    it('should return zero when empty string is passed ', () =>{
        expect(sum("")).toBe(0);
    })
})