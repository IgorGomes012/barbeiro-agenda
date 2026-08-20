"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Appointment } from "../app/components/Schedule/types";

type AppointmentContextData = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  deleteAppointment: (id: string) => void;
};

type AppointmentProviderProps = {
  children: ReactNode;
};

export const AppointmentContext = createContext<
  AppointmentContextData | undefined
>(undefined);

export function AppointmentProvider({ children }: AppointmentProviderProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addAppointment(newAppointment: Appointment) {
    setAppointments((previousAppointments) => [
      ...previousAppointments,
      newAppointment,
    ]);
  }

  function deleteAppointment(id: string) {
    setAppointments((previousAppointments) =>
      previousAppointments.filter((appointment) => appointment.id !== id),
    );
  }

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointments deve ser usado dentro de um AppointmentProvider",
    );
  }

  return context;
}
