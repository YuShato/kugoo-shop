import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import   ProductActionCreators from '../../store/action-creator/'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(ProductActionCreators, dispatch)
}
