/** model扩展类 帮助快速创建model */
import extend from 'dva-model-extend';

/**
 * 通用model
 */
export const model = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

/**
 * 分页model
 */
export const pagedModel = extend(model, {
  state: {
    paged: {
      Items: [],
      Total: 10
    },
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },
})
