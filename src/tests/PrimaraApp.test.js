import React from "react";

import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";
describe("Prueba en componente", () => {
  // test("Debe mostrar el mensaje Hola, soy Goku", () => {
  //   const saludo = "Hola, soy Goku";
  //   const { getByText } = render(<PrimeraApp saludo="Hola, soy Goku" />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test("Debe mostrar PrimeraApp correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo="Hola, soy Goku" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subTitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo="Hola, soy Goku" subtitulo={subTitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subTitulo);
  });
});
