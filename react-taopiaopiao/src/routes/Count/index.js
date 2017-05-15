/**
 * Created by Administrator on 2017/5/8.
 */
import { injectReducer } from '../../store/reducers';
export default (state)=>({
  path: 'count',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Count = require('./components/Count').default;
      const countReducer = require('../../store/count').default;
      injectReducer(store, { key: 'count', reducer: countReducer});
      cb(null,Count)
    }, 'count')
  }
})
