const StubProductClient = require("./stub_product_client.js");
const ProductService = require("../product_service.js");

describe("productService-stub이용", () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("available한 상품만 보여주기", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([
      { item: "milk", available: true },
      { item: "banana", available: true },
    ]);
  });
});
