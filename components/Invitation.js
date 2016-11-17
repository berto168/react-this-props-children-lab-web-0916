const React = require('react');

class Invitation extends React.Component {
  render() {
    const invitations = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })
    return (
      <div>
        <h1>You've been invited!</h1>
        {invitations}
      </div>
    )
  }
}

module.exports = Invitation;
