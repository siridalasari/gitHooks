import { describe, it} from "@std/testing/bdd";
import { assertEquals} from "@std/assert";
import { add } from "../src/app.js";

describe("add", () =>{
  it("sum", () => {
    const sum = add(1,3)
    assertEquals(sum, 3)
  })
})