// 定义一个登陆插件
export default {
  install: (app, Options) => {
    console.log(Options)
    app.directive('my-directive', {
      bind (el, binding) {
        console.log('el:' + el)
        el.style = 'width:100px;height:100px;background-color: #ccc;'
        el.htmlText = '<p>插件内容</p>'
      }
    })
  }
}
