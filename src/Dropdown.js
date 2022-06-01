import React, { PureComponent } from "react";

class Dropdown extends PureComponent {
  //typo: It should be constructor
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { label } = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen} // typo  should be aria-expanded
          onClick={this.toggle}
        >
          {label}
        </button>

        <ul
          className={`${isOpen ? "dropdown-open" : ""} dropdown-menu`}
          aria-labelledby="dropdownButton"
          role="menu"
        >
          <div>{isOpen ? this.props.children : ""}</div>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
