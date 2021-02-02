import { camelCase } from 'lodash'
import { parseUrl } from 'query-string'
import { StackActions } from '@react-navigation/native';
import {navigationRef} from './rootNavigate'


function handleUrl (url){
    const path = url.split('?')[0]
    const pageName:string = camelCase(path.startsWith('/') ? path : `/${path}`).replace(/^\S/, s => s.toUpperCase())
    const params = parseUrl(url.startsWith('/') ? url.substr(1) : url).query || {}
    return {
      pageName,
      params
    }
  }


export function navigateTo(options){
    const { url } = options
    if(!url) return 
    const routeParam = handleUrl(url)
    navigationRef.current?.dispatch(StackActions.push(routeParam.pageName, routeParam.params));
}