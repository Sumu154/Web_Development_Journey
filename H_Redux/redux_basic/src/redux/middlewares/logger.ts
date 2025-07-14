import type { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("Prev state", store.getState())
  const result =  next(action);
  console.info("Next state", store.getState())
  console.groupEnd();
  return result;
}


export default logger;