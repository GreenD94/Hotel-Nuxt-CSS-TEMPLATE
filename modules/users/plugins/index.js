import * as userStore from '../modules/users/store/users'

export default async ({ store, isClient }) => {
  const opts = {}
  if (isClient) {
    opts.preserveState = true;
  }

  store.registerModule('users',userStore,opts);
};