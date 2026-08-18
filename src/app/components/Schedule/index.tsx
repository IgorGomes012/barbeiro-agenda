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
import type { Appointment } from "./types";
import { AppointmentList } from "../AppointmentList";

const services = ["Corte de cabelo", "Barba", "Corte + Barba"];

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

export default function Schedule() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientNumber, setClientNumber] = useState("");

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!service || !date || !time || !clientName || !clientNumber) {
      alert("Preencha todos os campos.");
      return;
    }

    const isTimeOccupied = appointments.some(
      (appointment) => appointment.date === date && appointment.time === time,
    );

    if (isTimeOccupied) {
      alert("Horario ja ocupado");
      return;
    }

    const appointment: Appointment = {
      id: crypto.randomUUID(),
      clientName,
      clientNumber,
      service,
      date,
      time,
    };

    alert(
      `Agendamento realizado!\n\nNome: ${clientName} \nTelefone: ${clientNumber} \nServiço: ${service}\nData: ${date}\nHorário: ${time}`,
    );

    setAppointments((previousAppointments) => [
      ...previousAppointments,
      appointment,
    ]);

    setClientName("");
    setClientNumber("");
    setService("");
    setDate("");
    setTime("");
  }

  function getTodayDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const today = getTodayDate();

  function handleDeleteAppointment(id: string) {
    setAppointments((previousAppointments) =>
      previousAppointments.filter((appointment) => appointment.id !== id),
    );
  }

  return (
    <ScheduleContainer>
      <ScheduleTitle>Agende seu horário</ScheduleTitle>
      <ScheduleForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="clientName">Nome do cliente</label>
          <input
            id="clientName"
            type="text"
            value={clientName}
            onChange={(event) => setClientName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="clientNumber">Número do cliente</label>
          <input
            id="clientNumber"
            type="tel"
            value={clientNumber}
            onChange={(event) => setClientNumber(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="service">Serviço</label>

          <select
            id="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Selecione um serviço</option>

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
              {times.map((availableTime) => {
                const isOccupied = appointments.some(
                  (appointment) =>
                    appointment.date === date &&
                    appointment.time === availableTime,
                );

                return (
                  <TimeButton
                    $isOccupied={isOccupied}
                    key={availableTime}
                    type="button"
                    disabled={isOccupied}
                    $selected={time === availableTime}
                    onClick={() => setTime(availableTime)}
                  >
                    {availableTime}
                  </TimeButton>
                );
              })}
            </TimeGrid>
          ) : (
            <p>Selecione uma data para visualizar os horários.</p>
          )}
        </FormGroup>
        <SubmitButton type="submit">Confirmar agendamento</SubmitButton>
        <AppointmentList
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />
      </ScheduleForm>
    </ScheduleContainer>
  );
}
