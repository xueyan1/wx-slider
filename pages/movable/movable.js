// pages/movable/movable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ['/image/img1.jpg', '/image/img2.jpg', '/image/img3.jpg', '/image/img4.jpg', '/image/img5.jpg', '/image/img6.jpg'],
    tempItems: [],
    index: 0
  },
  tap(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)

    if (this.data.items.length > 1) {
      let item = this.data.items.shift()
      this.data.tempItems.unshift(item)
      this.setData({
        items: this.data.items,
        tempItems: this.data.tempItems
      })
    }
  },
  // 上一张
  last() {
    let item = this.data.tempItems.shift()
    if (item) {
      this.data.items.unshift(item)
      this.setData({
        items: this.data.items,
        tempItems: this.data.tempItems
      })
    }
  },
  // 下一张
  next() {
    if (this.data.items.length > 1) {
      let item = this.data.items.shift()
      this.data.tempItems.unshift(item)
      this.setData({
        items: this.data.items,
        tempItems: this.data.tempItems
      })
    }
  }

})