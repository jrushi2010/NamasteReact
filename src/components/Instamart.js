import { useState } from "react";

const Section = ({ Title, description, isVisible, setIsVisible }) => {

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{Title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
const [visibleSection, setvisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        Title={"About Instamart"}
        description={"This is the about section of instamart"}
        isVisible={visibleSection==="about"}
        setIsVisible={()=>setvisibleSection("about")}
      />

      <Section
        Title={"Team Instamart"}
        description={
          "this is the team section of Instamart. The team has 50 members..."
        }
        isVisible={visibleSection==="team"}
        setIsVisible={()=>setvisibleSection("team")}  
      />

<Section
        Title={"Team Career"}
        description={
          "this is the team section of Instamart. The team has 50 members..."
        }
        isVisible={visibleSection==="career"}
        setIsVisible={()=>setvisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
