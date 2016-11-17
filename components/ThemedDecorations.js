const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const decorations = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });
    return(
      <div>
        {decorations}
      </div>
    )
  }
}

module.exports = ThemedDecorations;
