//여기서 보면 클래스에서 외부모듈의 의존성을 갖게된다. 따라서 테스트 하기에도 불편하게 되는것이다.

const ProductClient = require("./product_client");

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
