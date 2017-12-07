import React from "react";
import { shallow } from "enzyme";

import ReactContributors from "./";

describe("<ReactContributors />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ReactContributors />);
    expect(wrapper).toMatchSnapshot();
  });
});
