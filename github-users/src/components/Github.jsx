import React, { useReducer, useState } from "react";
import { fetchUser } from "../Reducer/githubActions";
import githubReducer from "../Reducer/githubReducer";

const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: "",
};
const Github = () => {
  const [state, dispatch] = useReducer(githubReducer, initValue);
  console.log(dispatch);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Github UserData</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="search for github userName"
        />
        <button onClick={() => fetchUser(dispatch, text)}>Search</button>
      </div>
      <div style={{display: "grid", gap: "20px", marginBottom: "20px", gridTemplateColumns: "repeat(2,1fr)"}} >
        {state.data.map((item) => (
          <div key={item.login} >
          <div>
            <img src={item.avatar_url} alt="" />
          </div>
          <div > {item.login}</div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Github;
