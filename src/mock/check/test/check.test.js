const check = require("../check.js");

describe("check", () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("predicate가 true면 onSuccess가 불려야함", () => {
    check(() => true, onSuccess, onFail);
    //onSuccess가 1번 불린다고 예측
    expect(onSuccess).toHaveBeenCalledTimes(1);

    //onSuccess가 yes를 불러야 한다고 예측
    expect(onSuccess).toHaveBeenCalledWith("yes");

    //onFail이 불리지 않아야 한다고 예측
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("predicate가 false면 onFail가 불려야함", () => {
    check(() => false, onSuccess, onFail);
    //onFail가 1번 불린다고 예측
    expect(onFail).toHaveBeenCalledTimes(1);

    //onFail가 yes를 불러야 한다고 예측
    expect(onFail).toHaveBeenCalledWith("no");

    //onSuccess가 불리지 않아야 한다고 예측
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
