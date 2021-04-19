import { Action, ActionType } from '../actions/repositoriesActions';

// reducer state interface
export interface RepositoriesReducerState {
  loading: boolean;

  // If we have an error, set error message to error or
  // if no error, set error to null to indicate that there's no error
  error: string | null;

  // array of strings
  data: string[];
}

// initial reducer state
const initialState = {
  loading: false,
  error: null,
  data: [],
};

// an Action creator is a function that creates and returns an action

// Actions are the only source of information for the store as per Redux official documentation.
// It carries a payload of information from your application to Store.
// As discussed earlier, actions are plain JavaScript object that must have a type attribute
// to indicate the type of action performed

// A reducer is a function that creates piece of state & determines changes to an application's state.
// It uses the action it receives to determine/update change in redux store
export const repositoriesReducer = (
  // NOTE: Adding 'return type annotation' to our reducer function to always
  // return a Value of Type - RepositoriesState from this function to avoid state errors.
  state: RepositoriesReducerState = initialState,

  action: Action

  // return type annotation here also for entire reducer
): RepositoriesReducerState => {
  // A type guard is some expression that performs a runtime check that guarantees the type in some scope.
  // Type guard is to narrow down an Action or to be more specific with a conditional block
  // This will help Typescript to figure out what kind of Action it really is.
  /** if (action.type === 'search_repositories_success') {
    // Now, we know with 100% certainty that 'action' satisfies the 'SearchSuccessAction' interface
    // because of that now we know for sure that payload property is an array of strings. 
    action.payload - this will be for sure an array of strings 
  } */

  // NOTE: Switch statement works as a Type Guard in typescript as well.
  // Just like above with if block.
  // We know with 100% certainty that all the 'action' satisfies the above interfaces
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
