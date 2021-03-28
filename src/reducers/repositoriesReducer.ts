// reducer state interface
export interface RepositoriesReducerState {
  loading: boolean;

  // If we have an error, set error message to error or
  // if no error, set error to null to indicate that there's no error
  error: string | null;

  // array of strings
  data: string[];
}

// actions interfaces
interface SearchRepositoriesAction {
  type: 'search_repositories';
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
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

  // NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
  // 'Type Alias' is just a name that represents another Type, similar to variable but for type.
  // 'Type Alias' is to create New Name for another Type.
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
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
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
