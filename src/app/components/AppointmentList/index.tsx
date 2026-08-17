import type { Appointment } from "../Schedule/types";
import {
  AppointmentCard,
  CancelButton,
  ListContainer,
  ListTitle,
} from "./style";

type AppointmentListProps = {
  appointments: Appointment[];
  onDelete: (id: string) => void;
};

export function AppointmentList({
  appointments,
  onDelete,
}: AppointmentListProps) {
  return (
    <ListContainer>
      <ListTitle>Agendamentos</ListTitle>
      {appointments.length === 0 ? (
        <p>Nenhum agendamento cadastrado.</p>
      ) : (
        appointments.map((appointment) => (
          <AppointmentCard key={appointment.id}>
            <h3>{appointment.clientName}</h3>
            <p>{appointment.service}</p>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <CancelButton onClick={() => onDelete(appointment.id)}>
              Cancelar
            </CancelButton>
          </AppointmentCard>
        ))
      )}
    </ListContainer>
  );
}
