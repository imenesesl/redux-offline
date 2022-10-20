import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import reducer from "./reducer";
export * as Actions from "./actions";
import axios from "axios";

const effect = (effect, _action) => {
  console.warn({ effect, _action });
  return axios(effect);
};

const discard = (error, _action, _retries) => {
  console.warn({ error, _action, _retries });
  const { request, response } = error;
  if (!request) throw error;
  if (!response) return false;
  return 400 <= response.status && response.status < 500;
};

const makeStore = () =>
  configureStore({
    reducer,
    enhancers: [offline({ ...offlineConfig, effect, discard })],
  });

export const wrapper = createWrapper(makeStore);
