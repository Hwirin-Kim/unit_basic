const ProductClient = require("../product_client.js");
const ProductService = require("../product_service_no_di.js");
jest.mock("../product_client.js");

describe("productService", () => {
  fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: true },
    { item: "apple", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return { fetchItems: fetchItems };
  });
  let productService;
  beforeEach(() => {
    productService = new ProductService();
  });

  it("available한 상품만 보여주기", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([
      { item: "milk", available: true },
      { item: "banana", available: true },
    ]);
  });
});
