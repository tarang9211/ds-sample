import { useState } from "react";
import { Button } from "../design-system/button";

const Index = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      type="secondary"
      bgColor="purple"
      isLoading={loading}
      onClick={() => setLoading(!loading)}
    >
      Button
    </Button>
  );
};

export default Index;
