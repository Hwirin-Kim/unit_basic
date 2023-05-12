const fetchProduct = require("../async.js");
//비동기 에러 테스트 방법
describe("Async", () => {
  //done 방식은 시간이 오래걸리고 코드도 복잡함
  it("async-done방법", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
      done();
    });
  });

  it("async-return방법", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 200 });
  });

  //resolves를 사용하여 성공케이스 확인
  it("async-resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 200,
    });
  });
  //rejects를 사용하여 실패케이스 확인
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
