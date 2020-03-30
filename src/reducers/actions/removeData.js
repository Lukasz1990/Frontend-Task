import { REMOVE_DATA } from '../types/types'

export const removeData = (id) => {
    return {type: REMOVE_DATA ,id}
}