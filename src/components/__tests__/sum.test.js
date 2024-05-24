//first argument is decription and second is function for that

import { sum } from "../sum"

test("sum function should calculate the sum of two numbers",()=>{
  const result =  sum(3,4)

  //Assertion - testing some method
  expect(result).toBe(7);
}) 