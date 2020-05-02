import React from 'react';
import { shallow } from 'enzyme';

import ContentWrapper from '../index';

describe('<ContentWrapper />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<ContentWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <ContentWrapper>{children}</ContentWrapper>,
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
