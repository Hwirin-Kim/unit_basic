const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  //각각 독립적인 테스트를 하기 위해 공통분모를 beforEach에 넣어둔다.
  beforeEach(() => {
    cal = new Calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("subtract", () => {
    cal.set(10);
    cal.subtract(2);
    expect(cal.value).toBe(8);
  });

  it("multiply", () => {
    cal.set(10);
    cal.multiply(2);
    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0/0===NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1/0===Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("1/1===1", () => {
      cal.set(1);
      cal.divide(1);
      expect(cal.value).toBe(1);
    });
  });
});
