import { useEffect, useState } from "react";

const Load = ({ id, Component, initialLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (initialLoad) {
      initialLoad().then(result => {
        setResult(result);
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <Component id={id} {...result} />;
};

export { Load };
