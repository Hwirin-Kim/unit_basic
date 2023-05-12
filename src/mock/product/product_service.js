//여기서는 의존성을 제거하고 컨스트럭터에 파라미터를 받아서 사용하는걸로 했음 이렇게 하면 테스트 할때도 원하는 함수를 파라미터로 넘기기만 하면 됨

class ProductService {
  constructor(ProductClient) {
    this.productClient = ProductClient;
  }
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
