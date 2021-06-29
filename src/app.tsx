import { notification } from 'antd';

export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      notification.error({ message: err.message });
    },
    initialState: {},
  },
};
