import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./reducers/user.reducer"
import notificationsReducer from "./reducers/notifications.reducer"
import refreshReducer from "./reducers/refresh.reducer"


export const store = configureStore({
    reducer:{
   user:userReducer,
   notifications:notificationsReducer,
   refresh:refreshReducer
    }
}) 

