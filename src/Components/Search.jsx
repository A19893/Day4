import { Input } from 'antd';
const Search = (props) => {
  return (
    <>
      <Input onChange={props.SearchHandler} placeholder='Enter City Name..'/>
    </>
  );
};
export default Search;