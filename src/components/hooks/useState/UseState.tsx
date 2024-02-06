import { useEffect, useState } from "react";

const UseState = () => {
  const [name, setName] = useState({ fname: "", lname: "" });
  const [count, setCount] = useState(0);
  const [int, setInt] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    document.title = name.fname + " " + name.lname;
    console.log("document title useEffect called");
  }, [name]);
  useEffect(() => {
    if (count === 3) {
      console.log("clearing");
      clearInterval(int);
      return;
    }
    if (!start) {
      startInt();
      setStart(true);
    }

    return () => {
      console.log("unmounting... timer");
      clearInterval(int);
    };
  }, [count]);
  const startInt = () => {
    const i = setInterval(() => {
      console.log(window.innerWidth);
    }, 1000);
    setInt(i);
  };

  useEffect(() => {
    // if (count === 3) {
    //   clearInterval(int);
    // } else {
    //   // clearInterval(int);
    //   // startInt();
    // }
  }, [count]);
  const handleStart = () => {
    setStart((prev) => {
      const new_s = !prev;
      if (new_s) startInt();
      else clearInterval(int);

      console.log("start value is", new_s);
      return new_s;
    });
  };
  return (
    <>
      <button
        onClick={() => {
          handleStart();
        }}
      >
        {start ? "stop" : "start"}
      </button>
      <input
        type="text"
        value={name.fname}
        placeholder="enter ur first name"
        onChange={(e) => {
          setName({ ...name, fname: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lname}
        placeholder="enter ur last name"
        onChange={(e) => {
          setName({ ...name, lname: e.target.value });
        }}
      />
      <h3>
        User Input Is: {name.fname}- {name.lname}
      </h3>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          // setCount((prev) => {
          //   return prev + 1;
          // });
          setCount(count + 1);
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          // setCount((prev) => {
          //   return prev + 1;
          // });
          setCount(count - 1);
        }}
      >
        --
      </button>
    </>
  );
};

export default UseState;
