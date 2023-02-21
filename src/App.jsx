import "./App.css";
import Form from "./components/Form";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
function App() {
  const [object, setObject] = useState({
    spaces: -1,
    lowerCase: -1,
    upperCase: -1,
    number: -1,
    symbol: -1,
  });
  const [forbiddenWords, setForbidden] = useState([]);
  const [objectUser, setObjectUser] = useState({
    spaces: -1,
    lowerCase: -1,
    upperCase: -1,
    number: -1,
    symbol: -1,
    forbidden: [],
  });

  const handleChangeCheck = (ev) => {
    if (ev.currentTarget.checked) {
      return parseInt(ev.currentTarget.nextSibling.nextSibling.value);
    } else {
      return -1;
    }
  };
  const handleChangeInput = (ev) => {
    if (ev.currentTarget.previousSibling.previousSibling.checked) {
      return parseInt(ev.currentTarget.value);
    } else {
      return false;
    }
  };
  return (
    <div className="App">
      <div className="options">
        <div>
          <h2>Password</h2>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, spaces: handleChangeCheck(ev) });
              }}
            />
            <h3>Spaces</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObject({ ...object, spaces: handleChangeInput(ev) });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, lowerCase: handleChangeCheck(ev) });
              }}
            />
            <h3>LowerCase</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObject({ ...object, lowerCase: handleChangeInput(ev) });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, upperCase: handleChangeCheck(ev) });
              }}
            />
            <h3>UpperCase</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObject({ ...object, upperCase: handleChangeInput(ev) });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, number: handleChangeCheck(ev) });
              }}
            />
            <h3>Numbers</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObject({ ...object, number: handleChangeInput(ev) });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, symbol: handleChangeCheck(ev) });
              }}
            />
            <h3>Symbols</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObject({ ...object, symbol: handleChangeInput(ev) });
                }
              }}
            />
          </div>
        </div>
        <div>
          <h2>User</h2>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({ ...objectUser, spaces: handleChangeCheck(ev) });
              }}
            />
            <h3>Spaces</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObjectUser({
                    ...objectUser,
                    spaces: handleChangeInput(ev),
                  });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({
                  ...objectUser,
                  lowerCase: handleChangeCheck(ev),
                });
              }}
            />
            <h3>LowerCase</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObjectUser({
                    ...objectUser,
                    lowerCase: handleChangeInput(ev),
                  });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({
                  ...objectUser,
                  upperCase: handleChangeCheck(ev),
                });
              }}
            />
            <h3>UpperCase</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObjectUser({
                    ...objectUser,
                    upperCase: handleChangeInput(ev),
                  });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({ ...objectUser, number: handleChangeCheck(ev) });
              }}
            />
            <h3>Numbers</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObjectUser({
                    ...objectUser,
                    number: handleChangeInput(ev),
                  });
                }
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({ ...objectUser, symbol: handleChangeCheck(ev) });
              }}
            />
            <h3>Symbols</h3>
            <input
              type="number"
              defaultValue={-1}
              min={-1}
              onChange={(ev) => {
                if (handleChangeInput(ev) != false) {
                  setObjectUser({
                    ...objectUser,
                    symbol: handleChangeInput(ev),
                  });
                }
              }}
            />
          </div>
          <div>
            <h3>Forbbiden words</h3>
            <input type="text" />
            <button
              onClick={(ev) => {
                if (ev.currentTarget.previousSibling.value !== "") {
                  setForbidden([
                    ...forbiddenWords,
                    ev.currentTarget.previousSibling.value,
                  ]);
                  const list = [
                    ...forbiddenWords,
                    ev.currentTarget.previousSibling.value,
                  ];
                  setObjectUser({ ...objectUser, forbidden: [...list] });
                }
                ev.currentTarget.previousSibling.value = "";
              }}
            >
              Add
            </button>
            <div>
              ;
              {forbiddenWords.map((word) => (
                <h4 key={word}>{word}</h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="example">
        <Form object={object} objectUser={objectUser} />
        <CodeMirror
          value="console.log('hello world!');"
          height="200px"
          extensions={[javascript({ jsx: true })]}
        />
      </div>
    </div>
  );
}

export default App;
