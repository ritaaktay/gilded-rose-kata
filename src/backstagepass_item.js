const AgingItem = require("./aging_item");

class BackstagePassItem extends AgingItem {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else {
      this.quality += 1;
      if (this.sellIn <= 10) this.quality += 1;
      if (this.sellIn <= 5) this.quality += 1;
      if (this.quality > 50) this.quality = 50;
    }
  }
}

module.exports = BackstagePassItem;
