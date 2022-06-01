import React, { PureComponent } from "react";

class DropdownItem extends PureComponent {
  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>
    );
  }
}

export default DropdownItem;
