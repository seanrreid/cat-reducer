import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (e, dispatch) => {
  dispatch({
    type: "changeName",
    newName: e.target.value
  });
};

const Activity = () => {
  const [value, dispatch] = useContext(StateContext);

  return (
    <div>
      <h1>Cat Reducer</h1>
      <p>
        {value.name} is {value.activity}
      </p>
      <p>
        <label>
          Change Name:{" "}
          <input
            type="text"
            name="newName"
            placeholder="New Name"
            onChange={e => handleChange(e, dispatch)}
          />
        </label>
      </p>
      <ul>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: "changeActivity",
                activity: "eating"
              })
            }
          >
            Eating
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: "changeActivity",
                activity: "napping"
              })
            }
          >
            Napping
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: "changeActivity",
                activity: "playing"
              })
            }
          >
            Playing
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Activity;
