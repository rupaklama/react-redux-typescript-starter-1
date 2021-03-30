// TypedUseSelectorHook
// This interface allows you to easily create a hook that is properly typed for your store's root state
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reducers';

// now whenever we want to access Redux Store State inside of any component,
// we are going to use our 'useTypedSelector' - this thing is going to understand
// the Type of Data which is store inside of our Redux Store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// NOTE: This is to avoid repeating the state type declaration - (state: RootState) with useSelector
// useTypedSelector - naming is optional
// Also can be done the same with 'useDispatch' for flexibility
