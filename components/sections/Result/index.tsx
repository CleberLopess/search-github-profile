import React, { useState, useCallback, useEffect } from "react";
import styles from "./styles.module.css";

//api
import { searchProfile } from "../../../api/search";

//comonents
import Input from "../../Input";
import Button from "../../Button";
import ImageProfile from "../../ImageProfile";
import Select from "../../Select";

//types
import { Item } from "../../../types/githupProfile";

//data
import { selectOrdenar, selectOrdem } from "./data";

const Result = () => {
  const [nameProfile, setNameProfile] = useState<string>("cleberlopess");
  const [repositoriesName, setRepositoriesName] = useState<string>();
  const [repositoriesLanguage, setRepositoriesLanguage] = useState<string>();
  const [dateInitial, setDateInitial] = useState<string>();
  const [dateFinal, setDateFinal] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [order, setOrder] = useState<string>();
  const [data, setData] = useState<Item[]>();

  const handleClickSearch = useCallback(
    async (e: any) => {
      e.preventDefault();

      const data = await searchProfile({
        nameProfile,
        repositoriesName,
        repositoriesLanguage,
        dateInitial,
        dateFinal,
        sort,
        order,
      });
      setData(data.items);
    },
    [
      dateFinal,
      dateInitial,
      nameProfile,
      repositoriesLanguage,
      repositoriesName,
      sort,
      order,
    ]
  );

  const handleClickOptionsSelect = useCallback(
    (e: any) => {
      const selectSort = document.getElementById(
        "selectSort"
      ) as HTMLSelectElement;
      const selectOrder = document.getElementById(
        "selectOrder"
      ) as HTMLSelectElement;

      setSort(selectSort.options[selectSort.selectedIndex].value);
      setOrder(selectOrder.options[selectOrder.selectedIndex].value);

      handleClickSearch(e);
    },
    [handleClickSearch]
  );

  return (
    <>
      <form className={styles.containerInputs} method="POST">
        <Input
          type="text"
          required
          onChange={(e) => setNameProfile(e.target.value)}
          value={nameProfile}
          placeholder="Digite o nome do usuário"
        />

        <Input
          type={"text"}
          onChange={(e) => setRepositoriesName(e.target.value)}
          value={repositoriesName}
          placeholder="Digite o nome do repositório"
          disabled={!nameProfile}
        />

        <Input
          type={"text"}
          onChange={(e) => setRepositoriesLanguage(e.target.value)}
          value={repositoriesLanguage}
          placeholder="Digite o idioma do repositório"
          disabled={!nameProfile}
        />

        <Input
          type={"date"}
          onChange={(e) => setDateInitial(e.target.value)}
          value={dateInitial}
          placeholder="Digite a data inicial"
          disabled={!nameProfile}
        />

        <Input
          type={"date"}
          onChange={(e) => setDateFinal(e.target.value)}
          value={dateFinal}
          placeholder="Digite a data final"
          disabled={!dateInitial}
        />

        <div className={styles.wrapperSlect}>
          <h2>Filtros Refinados</h2>
          <div className={styles.contentSlect}>
            <Select
              name="selectSort"
              id="selectSort"
              options={selectOrdenar}
              onChange={handleClickOptionsSelect}
            ></Select>
            <Select
              name="selectOrder"
              id="selectOrder"
              options={selectOrdem}
              disabled={!sort}
              onChange={handleClickOptionsSelect}
            ></Select>
          </div>
        </div>

        <div className={styles.containerButton}>
          <Button
            type="submit"
            onClick={handleClickSearch as any}
            disabled={!nameProfile}
          >
            Buscar
          </Button>
        </div>
      </form>

      {data?.length && (
        <div className={styles.containerResult}>
          <div className={styles.containerImage}>
            <ImageProfile src={data[0].owner.avatar_url} alt="avatar" />
          </div>
          <div className={styles.contentRepos}>
            {data.map((item) => (
              <div className={styles.repos} key={item.id}>
                <p>
                  <strong>NAME REPO: </strong> {item.name}
                </p>
                <p>
                  <strong>LINGUAGEM: </strong>{" "}
                  {item.language || "Não informado"}
                </p>
                <p>
                  <strong>Ultima data de att: </strong>
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
                <div>
                  <button>
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      Ir para o repoitório
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
