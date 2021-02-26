import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoachmarkContent from './CoachmarkContent';
import CoachmarkArrow, { K_POSITION_TOP, K_POSITION_BOTTOM } from './CoachmarkArrow';

export default class CoachmarkView extends Component {
  static propTypes = {
    position: PropTypes.oneOf([K_POSITION_TOP, K_POSITION_BOTTOM]),
    renderArrow: PropTypes.func,
  };

  static defaultProps = {
    position: K_POSITION_TOP,
    renderArrow: ({ x, position }) => <CoachmarkArrow x={x} position={position} />,
  };

  renderCoachmarkContent() {
    return <CoachmarkContent message={this.props.message} />;
  }

  renderCoachmarkArrow() {
    const { renderArrow, ...rest } = this.props;

    return renderArrow(rest);
  }

  render() {
    return this.props.position === K_POSITION_TOP ? (
      <React.Fragment>
        {this.renderCoachmarkArrow()}
        {this.renderCoachmarkContent()}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {this.renderCoachmarkContent()}
        {this.renderCoachmarkArrow()}
      </React.Fragment>
    );
  }
}
