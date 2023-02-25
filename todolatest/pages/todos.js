import { useState } from 'react';

export default function todos() {
  const [state, setState] = useState({
    id: Date.now(),
    title: '',
    iscompleted: false,
  });
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, state]);
  };
  const handleFilter = (id) => {
    console.log(id, 'x');
    let x = data?.filter((item, index) => {
      if (index == id) {
        console.log(index);
        item.iscompleted = !item.iscompleted;
      }
      return item;
    });
    setData(x);
  };
  return (
    <>
      <h1>TODODs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Enter Title"
          onChange={handleChange}
          name="title"
        />
        <input type="submit" />
      </form>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <h2>{item.title}</h2>
              <button onClick={() => handleFilter(index)}>
                {item.iscompleted ? 'Completed' : 'not completed'}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
