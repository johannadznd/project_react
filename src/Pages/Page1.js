import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../commun/components/Card";

function Page1() {
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    if (toogle) {
      document.title = `Vous avez activé le bouton`;
    } else {
      document.title = `Vous avez désactivé le bouton`;
    }
  }, [toogle]);
  return (
    <>
      <h1 className="text-center text-2xl font-bold m-8">Ma page 1</h1>
      <div className="flex flex-row justify-center m-4">
        <button
          onClick={() => setToogle(!toogle)}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {!toogle ? "Afficher" : "Cacher"}
        </button>
      </div>
      {toogle ? (
        <p className="text-center text-2xl font-bold m-8">Lorem ipsum</p>
      ) : (
        ""
      )}
      <div className="flex flex-row justify-center m-8">
        <Card title="Mon titre" />
      </div>
    </>
  );
}

export default Page1;
