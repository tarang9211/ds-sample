/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Button } from "../design-system/button";

const Index = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        type="primary"
        bgColor="purple"
        isLoading={loading}
        loadingText={"Submitting"}
        onClick={() => alert("Click the adjacent button")}
      >
        Submit
      </Button>
      <Button
        type="primary"
        bgColor="blue"
        onClick={() => setLoading(!loading)}
      >
        Toggle State
      </Button>
    </div>
  );
};

export default Index;
