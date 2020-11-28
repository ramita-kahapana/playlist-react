/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react'

export default {
    Home: {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/Home'))
      },
    Playlist: {
        path: '/playlist',
        exact: true,
        component: lazy(() => import('../pages/Playlist'))
      },
  Login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Login'))
  },


}
