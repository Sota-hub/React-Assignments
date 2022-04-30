import { createContext, useContext } from "react";

const Context = createContext();

const ComponentD = () => {
  const { value_D } = useContext(Context);
  return (
  <>
    <p>{ value_D }</p>
  </>
  );
};

const ComponentC = () => {
  const { value_C } = useContext(Context);
  return (
  <>
    <p>{ value_C }</p>
  </>
  );
};

const ComponentB = () => (
  <>
    <ComponentC />
    <ComponentD />
  </>
);

const ComponentA = () => {
  const initialValue = {
    value_C: "component 'C'",
    value_D: "component 'D'"
  }
  return (
    <>
      <Context.Provider value={initialValue}>
        <ComponentB />
      </Context.Provider>
    </>
  );
};

const ChallengeE = () => {
  return <ComponentA />
};

export default ChallengeE