import "./App.css";
import Form from "./components/Form";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import ObjecsTemplate from "./components/templates/ObjectsTemplate";
import CheckPasswordTemplate from "./components/templates/CheckPasswordTemplates";
import CheckUserTemplate from "./components/templates/CheckUserTemplate";
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
      return -1;
    }
  };
  return (
    <div className="App">
      <div className="options">
        <div>
          <h2>Password</h2>
          <p>-1 for any, 0 for never, int for minimun times has to appear.</p>
          <p> Needs to be checked to apply</p>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObject({ ...object, spaces: handleChangeCheck(ev) });
              }}
            />
            <h3>Spaces</h3>
            <input
              type="range"
              defaultValue={-1}
              min={-1}
              max={10}
              onChange={(ev) => {
                setObject({ ...object, spaces: handleChangeInput(ev) });
              }}
            />
            <h4>{object.spaces}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={10}
              onChange={(ev) => {
                
                  setObject({ ...object, lowerCase: handleChangeInput(ev) });
                
              }}
            />
            <h4>{object.lowerCase}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={10}
              onChange={(ev) => {
                
                  setObject({ ...object, upperCase: handleChangeInput(ev) });
                
              }}
            />
            <h4>{object.upperCase}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={10}
              onChange={(ev) => {
                
                  setObject({ ...object, number: handleChangeInput(ev) });
                
              }}
            />
            <h4>{object.number}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={10}
              onChange={(ev) => {
                
                  setObject({ ...object, symbol: handleChangeInput(ev) });
                
              }}
            />
            <h4>{object.symbol}</h4>
          </div>
        </div>
        <div>
          <h2>User</h2>
          <p>-1 for any, 0 for not allowed. 1 for needed</p>
          <p> Needs to be checked to apply</p>
          <div>
            <input
              type="checkbox"
              onChange={(ev) => {
                setObjectUser({ ...objectUser, spaces: handleChangeCheck(ev) });
              }}
            />
            <h3>Spaces</h3>
            <input
              type="range"
              defaultValue={-1}
              min={-1}
              max={1}
              onChange={(ev) => {
                
                  setObjectUser({
                    ...objectUser,
                    spaces: handleChangeInput(ev),
                  });
                
              }}
            />
            <h4>{objectUser.spaces}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={1}
              onChange={(ev) => {
                
                  setObjectUser({
                    ...objectUser,
                    lowerCase: handleChangeInput(ev),
                  });
                
              }}
            />
            <h4>{objectUser.lowerCase}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={1}
              onChange={(ev) => {
                
                  setObjectUser({
                    ...objectUser,
                    upperCase: handleChangeInput(ev),
                  });
                
              }}
            />
            <h4>{objectUser.upperCase}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={1}
              onChange={(ev) => {
                
                  setObjectUser({
                    ...objectUser,
                    number: handleChangeInput(ev),
                  });
                
              }}
            />
            <h4>{objectUser.number}</h4>
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
              type="range"
              defaultValue={-1}
              min={-1}
              max={1}
              onChange={(ev) => {
                
                  setObjectUser({
                    ...objectUser,
                    symbol: handleChangeInput(ev),
                  });
                
              }}
            />
            <h4>{objectUser.symbol}</h4>
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
                <div key={word}>
                  <h4>{word}</h4>
                  <button
                    onClick={() => {
                      const list = forbiddenWords.filter(
                        (forbidden) => forbidden !== word
                      );
                      setForbidden([...list]);
                      setObjectUser({ ...objectUser, forbidden: [...list] });
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="example">
        <h1>Try yourself</h1>
        <p>Result will appear on console as true/false</p>
        <p>In case of forbidden word match also appear the word</p>
        <Form object={object} objectUser={objectUser} />
        <div className="divCodeMirror">
          <CodeMirror
            value={ObjecsTemplate(object, objectUser)}
            height="200px"
            extensions={[javascript({ jsx: true })]}
          />
          <CodeMirror
            value={CheckPasswordTemplate()}
            height="300px"
            extensions={[javascript({ jsx: true })]}
          />
          <CodeMirror
            value={CheckUserTemplate()}
            height="300px"
            extensions={[javascript({ jsx: true })]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
