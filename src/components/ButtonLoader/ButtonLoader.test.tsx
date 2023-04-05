import React from "react";
import Enzyme, { shallow } from "enzyme";
import ButtonLoader from "./ButtonLoader";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("ButtonLoader component", () => {
  it("should render a TailSpin loader with specified height, width and color", () => {
    const wrapper = shallow(<ButtonLoader />);
    const tailSpinLoader = wrapper.find("TailSpin");
    expect(tailSpinLoader.exists()).toBeTruthy();
    expect(tailSpinLoader.prop("color")).toEqual("#e0e3e4");
    expect(tailSpinLoader.prop("height")).toEqual(30);
    expect(tailSpinLoader.prop("width")).toEqual(30);
  });
});
