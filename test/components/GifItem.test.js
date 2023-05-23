import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const testTitle = "Soy un titulo";
  const testUrl = "https://www.google.com/u";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={testTitle} url={testUrl} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={testTitle} url={testUrl} />);
    //screen.debug();

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(testUrl);
    expect(alt).toBe(testTitle);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<GifItem title={testTitle} url={testUrl} />);

    expect(screen.getByText(testTitle)).toBeTruthy();
  });
});
