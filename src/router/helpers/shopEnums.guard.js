import store from '@/store'
import waiterOfActions from './waiterOfActions'

const actions = [
  'product/fetchProductFeatures',
  'measure/fetchMeasures',
  'product/fetchProductTypes'
]

export default async ( to, from, next ) => {
  store.commit( 'app/subAppLoaded', false )

  await waiterOfActions.executeActions( actions )

  store.commit( 'app/subAppLoaded', true )

  next()
}