import { Effect, Reducer, Subscription } from 'umi';
import _ from 'lodash';
import * as datasetService from '@/services/datasets';
import ex from 'umi/dist';

export interface DatasetDataModel {
  id: number;
  name: string;
}

interface DatasetRecordField {
  name: string;
  type: number;
}

export interface DatasetRecordDataModel {
  id?: number;
  datasetId?: number;
  fields?: DatasetRecordField[];
  data?: [];
}

export interface DatasetModelState {
  activeDatasetId: number;
  datasetList?: DatasetDataModel[];
  activeDatasetRecord?: DatasetRecordDataModel;
}

export interface DatasetModelType {
  namespace: 'dataset';
  state: DatasetModelState;
  effects: {
    fetchDatasetList: Effect;
  };
  reducers: {
    save: Reducer<DatasetModelState>;
    updateActiveDatasetId: Reducer<DatasetModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const DatasetModel: DatasetModelType = {
  namespace: 'dataset',
  state: {
    activeDatasetId: 0,
    datasetList: [],
    activeDatasetRecord: {},
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
    updateActiveDatasetId(state, { payload: { activeDatasetId } }) {
      return { ...state, activeDatasetId };
    },
  },
  effects: {
    *fetchDatasetList({}, { call, put }) {
      const datasetList: DatasetDataModel[] = yield call(
        datasetService.fetchDatasetList,
      );
      const firstDataset = _.first(datasetList);
      if (firstDataset) {
        const { id: activeDatasetId } = firstDataset;
        const activeDatasetRecords: DatasetRecordDataModel[] = yield call(
          datasetService.fetchDatasetDataById,
          { datasetId: activeDatasetId },
        );
        const activeDatasetRecord = _.first(
          activeDatasetRecords,
        ) as DatasetRecordDataModel;
        yield put({
          type: 'save',
          payload: {
            datasetList,
            activeDatasetId,
            activeDatasetRecord,
          },
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dataset') {
          dispatch({ type: 'fetchDatasetList' });
        }
      });
    },
  },
};

export default DatasetModel;
