class ProductClient {
  fetchItems() {
    return fetch("경로").then((response) => response.json());
  }
}
module.exports = ProductClient;
