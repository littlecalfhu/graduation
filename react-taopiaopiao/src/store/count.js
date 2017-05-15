/**
 * Created by Administrator on 2017/5/8.
 */
const INCRESE = 'increse';
export function onIncreseClick() {
  return{
    type: INCRESE
  }
}
const ACTION_HANDLES = {
  [INCRESE]: function (state) {
    const count = state.count;
    return{
      count:count+1
    }
  }
}
const initstate = {
  count:1
}
export default function countReducer(state = initstate,action){
  const handle = ACTION_HANDLES[action.type];
  return handle? handle(state,action) :state
}
