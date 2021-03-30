import axios from 'axios';

// Inside of Redux Type Definition file, there’s actually an Interface for it to define what the Dispatch function is.
// We don’t have to create Custom Interface ourself, instead we are going to IMPORT interface 'Dispatch' from there
// to use it to Annotate Dispatch in Action Creators.
import { Dispatch } from 'redux';

// Enums for all action types.
// Enum is an object for small fixed set of values which are closely related.
// It's like a SET of some small values.
export enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}
// Now, we can use this enum 'ActionType' to access all these Action Types rather then writing raw strings
// which is bad as we are duplicating strings & easily can make typos.

// actions interfaces
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
// 'Type Alias' is just a name that represents another Type, similar to variable but for type.
// 'Type Alias' is to create New Name for another Type.
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

// An Action creator is a function that creates and returns an action
// Actions are the only source of information for the store as per Redux official documentation.
// It carries a payload of information from your application to Store.
// As discussed earlier, actions are plain JavaScript object that must have a type attribute
// to indicate the type of action performed

// action creator
// we need to provide Type Annotation for 'dispatch'
// default Dispatch Annotation with our 'Action' to return only our define Action types - correct ones
export const searchRepositories = (term: string) => async (
  dispatch: Dispatch<Action>
) => {
  // dispatching an action
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });

  // making request
  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term,
      },
    });

    // to get names of the library from the endpoint
    const names = data.objects.map((object: any) => object.package.name);

    // dispatching an action
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      // error object's message property
      payload: err.message,
    });
  }
};
