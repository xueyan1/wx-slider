let ww = wx.getSystemInfoSync().windowWidth;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1, 2, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    index:0
  },

  onLoad() {},
  changeIndex(e) {
    console.log(e.detail.index)
    this.setData({
      index: e.detail.index
    })
  },
  tap(e){
    console.log(e.currentTarget.dataset.item)
    wx.showModal({
      title: '当前选择的item',
      content: e.currentTarget.dataset.item + '',
    })
  }

})