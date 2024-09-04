import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../db/Firebase";
import { collection, getDocs } from "firebase/firestore";
// Define las colecciones que necesitas
const collections = ["content", "experience", "profile", "projects"];

// Crear el contexto
const DataContext = createContext();

// Proveedor del contexto
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchCollectionData = async (collectionPath) => {
        try {
          const querySnapshot = await getDocs(collection(db, collectionPath));
          const data = querySnapshot.docs.map((doc) => doc.data());
          localStorage.setItem(collectionPath, JSON.stringify(data)); // Guardar en localStorage
          return data;
        } catch (error) {
          console.error(`Error fetching data from ${collectionPath}:`, error);
          return [];
        }
      };

      const fetchCollectionPromises = collections.map(fetchCollectionData);
      const results = await Promise.all(fetchCollectionPromises);

      // Almacenar los datos en el estado
      setData(
        collections.reduce((acc, collectionPath, index) => {
          acc[collectionPath] = results[index];
          return acc;
        }, {})
      );
    };

    const loadFromLocalStorage = () => {
      const storedData = {};
      collections.forEach((collectionPath) => {
        const localData = localStorage.getItem(collectionPath);
        if (localData) {
          storedData[collectionPath] = JSON.parse(localData);
        }
      });
      return storedData;
    };

    const initializeData = async () => {
      const localData = loadFromLocalStorage();
      if (Object.keys(localData).length > 0) {
        setData(localData);
      } else {
        await fetchData();
      }
    };

    initializeData();
  }, []);

  // Función para obtener datos de una colección específica
  const getCollectionData = (collectionPath) => {
    return data[collectionPath] || [];
  };

  return (
    <DataContext.Provider value={{ getCollectionData }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useData = () => useContext(DataContext);
