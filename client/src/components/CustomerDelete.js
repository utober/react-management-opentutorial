import React from 'react';

class CustomerDelete extends React.Component {

  deleteCustomer(id) {
    const url = '/api/customers/' + id;
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE'
    })
    this.props.stateRefresh();
  }

  render() {
    return (
      <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
    );
  }
}

export default CustomerDelete;