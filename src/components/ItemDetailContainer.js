import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);

  let { id } = useParams();

  const getData = async () => {
    try {
      const itemsCollection = collection(db, "Items");
      const coleccion = await getDocs(itemsCollection);
      const result = coleccion.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setPeliculas(result.filter((peli) => peli.id === id));

      setCargando(false);
    } catch (error) {
      console.warn("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          {peliculas.map((peli) => (
            <ItemDetail {...peli} key={peli.id} />
          ))}
        </>
      )}
    </div>
  );
};
