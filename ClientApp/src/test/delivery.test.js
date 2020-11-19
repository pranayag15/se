import React from "react";
import { shallow } from "enzyme";
import Delivery from "../components/FetchEmployee";

it("add some delivey person test", () => {
  const wrapper = mount(<Delivery/>);
  const label = wrapper.find("label");
  expect(label).toHaveLength(1);
  expect(label.prop("htmlFor")).toEqual("first_name");
  expect(label.text()).toEqual("First Name");
  const input = wrapper.find("input");
  expect(input).toHaveLength(1);
  expect(input.prop("type")).toEqual("text");
});

describe('Delivery signup', () => {
    it('should fail if no credentials are provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const loginComponent = shallow(<Delivery />);
        expect(loginComponent.find('.form-login').length).toBe(1);
        loginComponent.find('.form-login').simulate('submit', fakeEvent);
        expect(loginComponent.find(Notification).length).toBe(1);
    });
});