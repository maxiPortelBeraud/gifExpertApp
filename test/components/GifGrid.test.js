/* eslint-disable jest/valid-expect */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "Dragon Ball z";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      { id: "ABC", title: "Goku", url: "https://www.google.com" },
      { id: "123", title: "Vegeta", url: "https://www.facebook.com" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    //screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
