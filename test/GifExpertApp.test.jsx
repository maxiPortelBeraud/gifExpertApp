import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("El input debe retornar el mismo valor", () => {
    render(<GifExpertApp />);
    const incorrectInputValue = "G";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: incorrectInputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe(incorrectInputValue);
  });
  /* test("El input debe estár vacío cuando se ingresa correctInputValue", () => {
    render(<GifExpertApp />);
    const correctInputValue = "Goku";
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: correctInputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
  }); */
});
