import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Reservations } from "./Reservations";

test("Submitting a valid reservation form", async () => {
  render(<Reservations />);

  expect(screen.getByLabelText("Name").value).toBe("");
  expect(screen.getByLabelText("Select Date:").value).toBe("");
  expect(screen.getByLabelText("Select Time:").value).toBe("");
  expect(screen.getByLabelText("Number of People:").value).toBe("");
  expect(screen.getByLabelText("Occasion:").value).toBe("");

  const formData = {
    name: "John Doe",
    date: "2023-08-15",
    time: "14:00",
    numberOfPeople: "4",
    occasion: "Birthday",
  };

  fireEvent.change(screen.getByLabelText("Name"), { target: { value: formData.name } });
  fireEvent.change(screen.getByLabelText("Select Date:"), { target: { value: formData.date } });
  fireEvent.change(screen.getByLabelText("Select Time:"), { target: { value: formData.time } });
  fireEvent.change(screen.getByLabelText("Number of People:"), { target: { value: formData.numberOfPeople } });
  fireEvent.change(screen.getByLabelText("Occasion:"), { target: { value: formData.occasion } });

  fireEvent.click(screen.getByText("Submit"));

  await waitFor(() => {
    expect(screen.getByLabelText("Name").value).toBe("");
    expect(screen.getByLabelText("Select Date:").value).toBe("");
    expect(screen.getByLabelText("Select Time:").value).toBe("");
    expect(screen.getByLabelText("Number of People:").value).toBe("");
    expect(screen.getByLabelText("Occasion:").value).toBe("");
  });

});

