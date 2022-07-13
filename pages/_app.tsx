/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "../styles/globals.css";
import { searchProfile, limitSearchAPI } from "../api/search";
import { Item } from "../types/githupProfile";

import Layout from "../components/Layout";
import Button from "../components/Button";
import Input from "../components/Input";
import ImageProfile from "../components/ImageProfile";

import Result from "../components/sections/Result";

function MyApp() {
  const [minutes, setMinutes] = useState<number>(0);

  const currentLimit = async () => {
    const datalimit = await limitSearchAPI();
    const limitCurrent = datalimit.resources.search.remaining;
    const tempRemaining = datalimit.resources.search.reset;
    const minutes = new Date(tempRemaining * 1000).getMinutes();

    setMinutes(minutes);

    limitCurrent < 4 ? alert("Limite de busca atingido") : null;
  };

  setTimeout(() => {
    try {
      currentLimit();
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  return (
    <Layout>
      <h1>
        Sua requisição para a API publica será resetada nos proximo {minutes}{" "}
        minutos{" "}
      </h1>
      <Result />
    </Layout>
  );
}

export default MyApp;
