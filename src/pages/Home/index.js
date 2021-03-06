import React from "react";
import { Container, SquareButton } from "./styles";
import { ReactComponent as Logo } from "../../assets/svgs/Logo.svg";
import { ReactComponent as Agenda } from "../../assets/svgs/Agenda.svg";
import { ReactComponent as Atividades } from "../../assets/svgs/Atividades.svg";
import { ReactComponent as Disciplinas } from "../../assets/svgs/Disciplinas.svg";
import { ReactComponent as Notas } from "../../assets/svgs/Notas.svg";
import LongButton from "../../components/LongButton";

const Home = () => {
  return (
    <Container>
      <Logo className="logo" />
      <article className="buttons-container">
        <SquareButton className="disabled" to="/">
          <Agenda />
          <p className="caption">Agenda</p>
        </SquareButton>

        <SquareButton to="/activities">
          <Atividades />
          <p className="caption">Atividades</p>
        </SquareButton>

        <SquareButton className="disabled" to="/">
          <Notas />
          <p className="caption">Notas</p>
        </SquareButton>

        <SquareButton className="disabled" to="/">
          <Disciplinas />
          <p className="caption">Disciplinas</p>
        </SquareButton>
      </article>
      <footer>
        <p className="subtitle">2020.2</p>
        <LongButton disabled>Gerenciar Semestres</LongButton>
      </footer>
    </Container>
  );
};

export default Home;
