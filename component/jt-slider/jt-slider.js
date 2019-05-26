let ww = wx.getSystemInfoSync().windowWidth;
Component({
  /**
   * 组件的属性列表
   * 
   * offset:左边偏移
   * block_width:滑块的宽度
   * steplong: 每一步的距离,
    index: 当前选择的位置,
    marginLeft: 距离左边间距 ,
    marginRight: 距离右边间距
   */
  properties: {
    block_width:{
      type:Number,
      value:0
    },
    marginLeft:{
      type:Number,
      value:20
    },
    marginRight:{
      type:Number,
      value:20
    },
    index:{
      type:Number,
      value:0
    },
    lists:{
      type:Array,
      value:0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    ww:ww,
    list:[],
    offset: 0,
    steplong:0
  },

  attached(){
    this.setData({
      list: this.data.lists
    })
  },
  ready(){
    // 总分割的块数
    let totalSteps = this.data.list.length;
    // 每单位步长，px
    let steplong = (ww - this.data.marginLeft - this.data.marginRight) / totalSteps;
    console.log("steplong", steplong)
    this.setData({
      steplong: steplong,
      offset: steplong / 2,
      block_width: steplong
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    move(e) {
      console.log(e.changedTouches[0].pageX)
      let pagex = e.changedTouches[0].pageX
      if (pagex < this.data.steplong / 2 + this.data.marginLeft) {
        this.setData({
          offset: this.data.steplong / 2
        })
        this.setValue()
      } else if (pagex > ww - this.data.steplong / 2 - this.data.marginRight - this.data.marginLeft) {
        console.log("jaha", this.data.steplong * (this.data.list.length - 1))
        this.setData({
          offset: this.data.steplong * (this.data.list.length - 1) + this.data.steplong / 2
        })
        this.setValue()
      } else {
        this.setData({
          offset: pagex
        })
        this.setValue()
      }
    },
    setValue() {
      let index = this.data.offset / this.data.steplong
      index = Math.ceil(index)
      console.warn("index", index)
      this.setData({
        index: index
      })
      this.triggerEvent('changeIndex', {
        "index": this.data.index
      })
    },
    tap(){
      this.setData({
        offset: this.data.steplong / 2,
        index:0
      })
    }
  }
})
