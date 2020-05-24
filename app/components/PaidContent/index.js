import React from 'react';

export default function paidContent(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // use state to manage 'paid' toggle
      this.togglePaid = this.togglePaid.bind(this);
      this.state = {
        paid: false,
      };
    }

    // handle user input to make payment here
    togglePaid() {
      this.setState(prevState => ({ paid: !prevState.paid }));
    }

    render() {
      return (
        <WrappedComponent
          paid={this.state.paid}
          togglePaid={this.togglePaid}
          {...this.props}
        />
      );
    }
  };
}
