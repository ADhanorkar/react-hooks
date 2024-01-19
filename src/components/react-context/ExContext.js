import ComponentA from "./ComponentA";
import UserContext from "./contex/UserContext";
import GreetContext from "./contex/GreetContext";

const ExContext = () => {
  return (
    <div>
      <UserContext.Provider value={"Ashish Dhanorkar"}>
        <GreetContext.Provider value={"Good Evening!"}>
          {`Welcome`} <ComponentA />
        </GreetContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ExContext;
