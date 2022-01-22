import $store from '@/store'
import checkAuthToken from '@/router/helpers/checkAuthToken'

/*

  * There is 3 posibility variants of route.meta.auth

  - false - route requires only not authentificated users
  - undefined - user authentification is not matter
  - true - route requires only authtificated users

*/

export default async function ( to, from, next ) {
  const userAuth = $store.getters[ 'auth/isAuth' ]
  const refreshToken = $store.getters[ 'token/refresh' ]

  if ( userAuth === null && refreshToken !== null ) {
    await checkAuthToken()
  }

  const routeRequireAuth = to.meta.auth

  if ( routeRequireAuth === false && userAuth ) {
    next( { name: 'Home' } )
  } else if ( routeRequireAuth === true && !userAuth ) {
    next( { name: 'Main' } )
  } else {
    next()
  }
}