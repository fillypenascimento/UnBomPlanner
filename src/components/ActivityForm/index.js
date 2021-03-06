import React from "react";

import { Container, TagOption } from "./styles";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// import TextField from '@material-ui/core/TextField';

import InputDateTime from "../InputDateTime";

import { ReactComponent as SubmissionDateIcon } from "../../assets/svgs/SubmissionDate.svg";
import { ReactComponent as RealizationDateIcon } from "../../assets/svgs/RealizationDate.svg";
import { ReactComponent as AssociatedDisciplineIcon } from "../../assets/svgs/AssociatedDiscipline.svg";
import { ReactComponent as ActivityTypeIcon } from "../../assets/svgs/ActivityType.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/svgs/Description.svg";

function ActivityForm({
  readOnly = false,
  submissionDate = "",
  setSubmissionDate = () => {},
  realizationDate = "",
  setRealizationDate = () => {},
  associatedDiscipline = "",
  setAssociatedDiscipline = () => {},
  activityType = "",
  setActivityType = () => {},
  description = "",
  setDescription = () => {},
  submissionDateFilled,
  realizationDateFilled,
  titleFilled,
}) {
  const disciplines = ["Nenhuma", "OAC", "IHC", "CN"];

  return (
    <Container
      submissionDateFilled={readOnly ? true : submissionDateFilled}
      realizationDateFilled={readOnly ? true : realizationDateFilled}
    >
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <SubmissionDateIcon /> Data de Entrega:
          </label>
          <InputDateTime
            value={submissionDate}
            setValue={setSubmissionDate}
            readOnly={readOnly}
            additionalClass="submission-date-filled"
          />
        </div>
        <div className="input-group">
          <label className="smaller-text">
            <RealizationDateIcon /> Data de Realização:
          </label>
          <InputDateTime
            value={realizationDate}
            setValue={setRealizationDate}
            readOnly={readOnly}
            additionalClass="realization-date-filled"
          />
        </div>
      </div>
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <AssociatedDisciplineIcon /> Disciplina Associada:
          </label>
          <Dropdown
            className="associated-discipline-filled"
            controlClassName="select"
            value={associatedDiscipline}
            placeholder={"Nenhuma"}
            onChange={setAssociatedDiscipline}
            options={disciplines}
            disabled={readOnly}
          />
        </div>
        <div className="selection-group">
          <label className="smaller-text">
            <ActivityTypeIcon /> Tipo de Atividade:
          </label>
          <TagOption
            className={
              activityType === "Tarefa" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Tarefa")}
            tagColor={"#FCBF9C"}
          >
            Tarefa
          </TagOption>
          <TagOption
            className={
              activityType === "Prova" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Prova")}
            tagColor={"#dcf8a1"}
          >
            Prova
          </TagOption>
          <TagOption
            className={
              activityType === "Trabalho"
                ? "selected type-option"
                : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Trabalho")}
            tagColor={"#FFF8B6"}
          >
            Trabalho
          </TagOption>
        </div>
      </div>
      <div className="textarea-group">
        <label className="smaller-text">
          <DescriptionIcon /> Descrição:
        </label>
        <textarea
          disabled={readOnly}
          placeholder={readOnly ? "Sem descrição" : "Digite aqui..."}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {!readOnly &&
        (!titleFilled || !submissionDateFilled || !realizationDateFilled) ? (
          <p className="error-message">Preencha os campos indicados.</p>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default ActivityForm;
