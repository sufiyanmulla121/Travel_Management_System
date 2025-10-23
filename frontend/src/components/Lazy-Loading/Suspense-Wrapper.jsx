import React, { Suspense } from "react";
import Loader from "../Loader/Loader";

const SuspenseWrapper = (Component) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default SuspenseWrapper;
