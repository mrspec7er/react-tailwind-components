import { createContext, useState, useContext, useMemo } from "react";

const UserContext = createContext({
  userData: { name: "", profilePic: "" },
  setUserData: ({
    name,
    profilePic,
  }: {
    name: string;
    profilePic: string;
  }) => {},
});

export function ContextExample() {
  const [userData, setUserData] = useState({ name: "", profilePic: "" });
  const value = useMemo(() => ({ userData, setUserData }), [userData]);

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}

function UserNameInput() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <input
      type="text"
      value={userData.name}
      onChange={(e) =>
        setUserData({
          name: e.target.value,
          profilePic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232",
        })
      }
    />
  );
}

function UserInfo() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <span>{userData.name}</span>
      <img src={userData.profilePic} alt={userData.name} />
    </>
  );
}
