/**
 * Created by Administrator on 2017/5/2.
 */
export default (store) => ({
  path: 'qrcode',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Qrcode = require('./components/Qrcode.js').default
      cb(null,Qrcode)
    }, 'qrcode')
  }
})
