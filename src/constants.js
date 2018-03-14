/* @flow */

export const ATTACHMENT_DELETE_REQUEST = "ATTACHMENT_DELETE_REQUEST";

export const BUCKET_BUSY = "BUCKET_BUSY";
export const BUCKET_RESET = "BUCKET_RESET";
export const BUCKET_COLLECTIONS_REQUEST = "BUCKET_COLLECTIONS_REQUEST";
export const BUCKET_COLLECTIONS_NEXT_REQUEST =
  "BUCKET_COLLECTIONS_NEXT_REQUEST";
export const BUCKET_COLLECTIONS_SUCCESS = "BUCKET_COLLECTIONS_SUCCESS";
export const BUCKET_HISTORY_REQUEST = "BUCKET_HISTORY_REQUEST";
export const BUCKET_HISTORY_NEXT_REQUEST = "BUCKET_HISTORY_NEXT_REQUEST";
export const BUCKET_HISTORY_SUCCESS = "BUCKET_HISTORY_SUCCESS";
export const BUCKET_CREATE_REQUEST = "BUCKET_CREATE_REQUEST";
export const BUCKET_UPDATE_REQUEST = "BUCKET_UPDATE_REQUEST";
export const BUCKET_DELETE_REQUEST = "BUCKET_DELETE_REQUEST";

export const COLLECTION_BUSY = "COLLECTION_BUSY";
export const COLLECTION_RESET = "COLLECTION_RESET";
export const COLLECTION_CREATE_REQUEST = "COLLECTION_CREATE_REQUEST";
export const COLLECTION_UPDATE_REQUEST = "COLLECTION_UPDATE_REQUEST";
export const COLLECTION_DELETE_REQUEST = "COLLECTION_DELETE_REQUEST";
export const COLLECTION_HISTORY_REQUEST = "COLLECTION_HISTORY_REQUEST";
export const COLLECTION_HISTORY_NEXT_REQUEST =
  "COLLECTION_HISTORY_NEXT_REQUEST";
export const COLLECTION_HISTORY_SUCCESS = "COLLECTION_HISTORY_SUCCESS";
export const COLLECTION_RECORDS_REQUEST = "COLLECTION_RECORDS_REQUEST";
export const COLLECTION_RECORDS_NEXT_REQUEST =
  "COLLECTION_RECORDS_NEXT_REQUEST";
export const COLLECTION_RECORDS_SUCCESS = "COLLECTION_RECORDS_SUCCESS";

export const GROUP_BUSY = "GROUP_BUSY";
export const GROUP_RESET = "GROUP_RESET";
export const GROUP_CREATE_REQUEST = "GROUP_CREATE_REQUEST";
export const GROUP_UPDATE_REQUEST = "GROUP_UPDATE_REQUEST";
export const GROUP_DELETE_REQUEST = "GROUP_DELETE_REQUEST";
export const GROUP_HISTORY_REQUEST = "GROUP_HISTORY_REQUEST";
export const GROUP_HISTORY_NEXT_REQUEST = "GROUP_HISTORY_NEXT_REQUEST";
export const GROUP_HISTORY_SUCCESS = "GROUP_HISTORY_SUCCESS";

export const NOTIFICATION_ADDED = "NOTIFICATION_ADDED";
export const NOTIFICATION_REMOVED = "NOTIFICATION_REMOVED";
export const NOTIFICATION_CLEAR = "NOTIFICATION_CLEAR";

export const RECORD_BUSY = "RECORD_BUSY";
export const RECORD_CREATE_REQUEST = "RECORD_CREATE_REQUEST";
export const RECORD_UPDATE_REQUEST = "RECORD_UPDATE_REQUEST";
export const RECORD_DELETE_REQUEST = "RECORD_DELETE_REQUEST";
export const RECORD_HISTORY_REQUEST = "RECORD_HISTORY_REQUEST";
export const RECORD_HISTORY_NEXT_REQUEST = "RECORD_HISTORY_NEXT_REQUEST";
export const RECORD_HISTORY_SUCCESS = "RECORD_HISTORY_SUCCESS";
export const RECORD_BULK_CREATE_REQUEST = "RECORD_BULK_CREATE_REQUEST";
export const RECORD_RESET = "RECORD_RESET";

export const ROUTE_LOAD_REQUEST = "ROUTE_LOAD_REQUEST";
export const ROUTE_LOAD_SUCCESS = "ROUTE_LOAD_SUCCESS";
export const ROUTE_LOAD_FAILURE = "ROUTE_LOAD_FAILURE";
export const ROUTE_UPDATED = "ROUTE_UPDATED";
export const ROUTE_REDIRECT = "ROUTE_REDIRECT";

export const SESSION_AUTHENTICATED = "SESSION_AUTHENTICATED";
export const SESSION_BUCKETS_REQUEST = "SESSION_BUCKETS_REQUEST";
export const SESSION_BUCKETS_SUCCESS = "SESSION_BUCKETS_SUCCESS";
export const SESSION_BUSY = "SESSION_BUSY";
export const SESSION_LOGOUT = "SESSION_LOGOUT";
export const SESSION_GET_SERVERINFO = "SESSION_GET_SERVERINFO";
export const SESSION_SERVERINFO_SUCCESS = "SESSION_SERVERINFO_SUCCESS";
export const SESSION_PERMISSIONS_SUCCESS = "SESSION_PERMISSIONS_SUCCESS";
export const SESSION_SETUP = "SESSION_SETUP";
export const SESSION_SETUP_COMPLETE = "SESSION_SETUP_COMPLETE";
export const SESSION_STORE_REDIRECT_URL = "SESSION_STORE_REDIRECT_URL";

export const HISTORY_ADD = "HISTORY_ADD";
export const HISTORY_CLEAR = "HISTORY_CLEAR";
