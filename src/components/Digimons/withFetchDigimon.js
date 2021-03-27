import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

import { fetchDigimon } from "../../services/digimonServices";
import Loading from "../Loading";

const withFetchDigimon = (Component) => () => {
  const params = useParams();
  const [digimon, setDigimon] = useState(null);
  const [isDigimonFetched, setIsDigimonFetched] = useState(false);

  useEffect(() => {
    fetchDigimon(params.id).then((digimon) => {
      setDigimon(digimon);
      setIsDigimonFetched(true);
    });
  }, []);

  if (!digimon?.id && isDigimonFetched) {
    return <Redirect to="/404" />;
  }

  if (!digimon) {
    return <Loading />;
  }

  return <Component digimon={digimon} />;
};

export default withFetchDigimon;
