import { REMOVE_DATA_SUBCELL } from './types/types'

export const removeDataSubCell = (id) => {
    return {type: REMOVE_DATA_SUBCELL ,id}
}