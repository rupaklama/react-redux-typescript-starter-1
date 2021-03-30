import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRepositories } from '../actions/repositoriesActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  // useDispatch hook to dispatch an action creator
  const dispatch = useDispatch();

  // useSelector hook to get access to repositories state in redux store
  // naming same as our 'repositories' state in combineReducers - key
  // This hook takes an arrow func with arg state (global state object) &
  // which part of state we want from combineReducers.
  // const { loading, data, error } = useSelector(
  //   (state: RootState) => state.repositories
  // );
  // DefaultRootState Error meaning whenever we make use of useSelector,
  // useSelector really has no idea about what type of data is inside Redux Store &
  // no information is communicated from Redux to React-Redux side of things. So,
  // we have to write Annotation to help React-Redux understand what type of data is argument - (state)

  // No need annotation - state: RootState
  const { loading, data, error } = useTypedSelector(
    state => state.repositories
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch an action creator
    dispatch(searchRepositories(term));

    setTerm('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={onChange} />
        <button>Search</button>
      </form>
      {/* this is like if condition, if condition is true, execute the code or display h3 */}
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
