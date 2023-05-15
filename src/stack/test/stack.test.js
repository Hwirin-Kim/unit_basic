const Stack = require("../stack.js");

describe("stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("스택은 사이즈 0으로 만들어져야한다", () => {
    expect(stack.size()).toBe(0);
  });

  it("하나를 push하면 사이즈가 1이되야함", () => {
    stack.push("Hi");
    expect(stack.size()).toBe(1);
  });

  describe("pop관련", () => {
    it("스택이 비어있을때 pop", () => {
      expect(() => stack.pop()).toThrow("스택이 비어있습니다.");
    });

    it("스택이 비어있지 않은 경우", () => {
      stack.push("hi");
      stack.push("bye");
      expect(stack.pop()).toBe("bye");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek관련", () => {
    it("스택이 비어있을때 peek", () => {
      expect(() => stack.peek()).toThrow("스택이 비어있습니다.");
    });

    it("마지막 push된 스택 보기, 단 pop되지않고 size유지", () => {
      stack.push("hello");
      stack.push("hi");
      stack.push("bye");
      expect(stack.peek()).toBe("bye");
      expect(stack.size()).toBe(3);
    });
  });
});
