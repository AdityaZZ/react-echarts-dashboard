import { Reducer } from 'umi';
import { Subscription } from '@@/plugin-dva/connect';

export interface GlobalModelState {
  activePath: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    updateActivePath: Reducer<GlobalModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    activePath: '',
  },
  reducers: {
    updateActivePath(state, { payload: { activePath } }) {
      return {
        ...state,
        activePath,
      };
    },
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({
          type: 'updateActivePath',
          payload: { activePath: pathname },
        });
      });
    },
  },
};

export default GlobalModel;
