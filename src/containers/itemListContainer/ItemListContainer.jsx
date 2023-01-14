import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import LinearProgress from '@mui/material/LinearProgress';

const ItemListContainer = () => {
  const { categoryName } = useParams;
  const [items, setItems] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
  }, [categoryName]);

  return <div>
    <LinearProgress color="secondary"/>
  </div>;
};

export default ItemListContainer;
