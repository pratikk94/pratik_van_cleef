import { Component } from "react";
import { setLoading, setNetworkError } from "../common/commonSlice";
import ApiCaller from "../../utils/ApiCaller";
import { toast } from "react-toastify";
import { setNotifications } from "./notificationsSlice";
// import { setNotifications, setNotificationsMessage, setNotificationsSuccess } from "./notificationsSlice";

export class NotificationMiddleware extends Component {
  static getNotification(token) {
    return async (dispatch) => {
      dispatch(setLoading(true));
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let res = await ApiCaller.Get("/api/allNotification", BearerHeaders);
          if (res.data.status) {
            dispatch(setLoading(false));
            resolve(res?.data);
            dispatch(setNotifications(res?.data));

            dispatch(setNetworkError(false));
          } else {
            dispatch(setLoading(false));
            reject(res);

            dispatch(setNetworkError(false));
          }
        } catch (error) {
          reject(false);
          dispatch(setLoading(false));

          dispatch(setNetworkError(true));
        }
      });
    };
  }
  static SendNotification(formData, token) {
    return async (dispatch) => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let res = await ApiCaller.Post(
            "/api/sendNotification",
            formData,
            BearerHeaders
          );
          if (res.data.status) {
            resolve(res);

            dispatch(setNetworkError(false));
          } else {
            reject(res);

            dispatch(setNetworkError(false));
          }
        } catch (error) {
          reject(false);

          dispatch(setNetworkError(true));
        }
      });
    };
  }
  static SendNotificationById(formData, token) {
    return async (dispatch) => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let res = await ApiCaller.Post(
            "/api/singleNotification",
            formData,
            BearerHeaders
          );
          if (res.data.status) {
            resolve(res);

            dispatch(setNetworkError(false));
          } else {
            reject(res);

            dispatch(setNetworkError(false));
          }
        } catch (error) {
          toast("catch");
          reject(false);

          dispatch(setNetworkError(true));
        }
      });
    };
  }
  static SendNotificationAll(formdata, token) {
    return async (dispatch) => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let res = await ApiCaller.Post(
            "/api/sendAllNotification",
            formdata,
            BearerHeaders
          );
          if (res.data.status) {
            resolve(res);

            dispatch(setNetworkError(false));
          } else {
            reject(res);

            dispatch(setNetworkError(false));
          }
        } catch (error) {
          toast("catch");
          reject(false);

          dispatch(setNetworkError(true));
        }
      });
    };
  }
}

// export const asyncSendNotificationsById = createAsyncThunk(
//     "add/subCategory",
//     async ({ config, id }, { getState, dispatch }) => {
//         dispatch(setLoading(true))
//         const res = await axios.post('api/singleNotification', { id: id }, config)
//         try {
//             console.log(res, "200");
//             if (res.data.status) {
//                 dispatch(setLoading(false))
//                 dispatch(setNotificationsSuccess(true))
//                 dispatch(setNotificationsMessage(res.data?.Message))
//                 dispatch(asyncGetNotifcations({ config: config }))
//             }
//             if (!res.data.status) {
//                 dispatch(setLoading(false))
//                 dispatch(setNotificationsSuccess(false))
//                 dispatch(setNotificationsMessage(res.data?.Message))
//                 dispatch(setError(res.data.errors))
//                 dispatch(asyncGetNotifcations({ config: config }))
//             }
//         } catch (error) {
//             dispatch(setLoading(false))
//         }
//     }
// )