export default class Purchase {
  constructor(userId, deviceId, price, color, purchaseItem, id) {
    this.userId = userId;
    this.deviceId = deviceId;
    this.price = price;
    this.color = color;
    this.purchaseItem = purchaseItem;
    this.id = id;
  }
}
