import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

const OTP_DIGITS_COUNT = 5;

function App() {
  const [inputArr, setinputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    
    const newValue = value.trim();

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setinputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }

  };
  return (
    <>
      <div>
        <h1>Validate OTP</h1>
        {inputArr.map((input, index) => {
          return (
            <input
              key={index}
              className="otp-input"
              type="text"
              value={inputArr[index]}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleOnChange(e.target.value, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
