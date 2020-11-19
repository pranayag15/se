import React from 'react';
import { shallow } from 'enzyme';
import Customer from '../components/FetchCustomer'

describe("Title input", () => {
    it("Should capture title correctly onChange", () => {
        const title = wrapper.find("input").at(0);
        title.instance().value = "Test";
        title.simulate("change");
        expect(setState).toHaveBeenCalledWith("Test");
    });
});

describe("Content input", () => {
    it("Should capture content correctly onChange", () => {
        const content = wrapper.find("input").at(1);
        content.instance().value = "Testing";
        content.simulate("change");
        expect(setState).toHaveBeenCalledWith("Testing");
    });
});