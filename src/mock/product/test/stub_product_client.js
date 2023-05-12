class StubProductClient {
  async fetchItems() {
    return [
      { item: "milk", available: true },
      { item: "banana", available: true },
      { item: "apple", available: false },
    ];
  }
}
module.exports = StubProductClient;
