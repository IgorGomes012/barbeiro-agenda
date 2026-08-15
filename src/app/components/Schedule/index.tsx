"use client";

import { useState } from "react";
import {
  FormGroup,
  ScheduleContainer,
  ScheduleForm,
  ScheduleTitle,
  SubmitButton,
  TimeButton,
  TimeGrid,
} from "./style";

const services = ["Corte de cabelo", "Barba", "Corte + Barba"];

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

export default function Schedule() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!service || !date || !time) {
      alert("Preencha todos os campos.");
      return;
    }

    alert(
      `Agendamento realizado!\n\nServiço: ${service}\nData: ${date}\nHorário: ${time}`,
    );
  }

  function getTodayDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const today = getTodayDate();

  return (
    <ScheduleContainer>
      <ScheduleTitle>Agende seu horário</ScheduleTitle>

      <ScheduleForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="service">Serviço</label>

          <select
            id="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Selecione um serviçoo</option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="date">Data</label>

          <input
            id="date"
            type="date"
            min={today}
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
              setTime("");
            }}
          />
        </FormGroup>

        <FormGroup>
          <label>Horário</label>

          {date ? (
            <TimeGrid>
              {times.map((availableTime) => (
                <TimeButton
                  key={availableTime}
                  type="button"
                  $selected={time === availableTime}
                  onClick={() => setTime(availableTime)}
                >
                  {availableTime}
                </TimeButton>
              ))}
            </TimeGrid>
          ) : (
            <p>Selecione uma data para visualizar os horários.</p>
          )}
        </FormGroup>

        <SubmitButton type="submit">Confirmar agendamento</SubmitButton>
      </ScheduleForm>
    </ScheduleContainer>
  );
}
