import React, { Component } from 'react';
import CoachmarkContent from './CoachmarkContent';
import CoachmarkArrow from './CoachmarkArrow';
import { CoachmarkViewProps } from '../types';

export default class CoachmarkView extends Component<CoachmarkViewProps> {
  static defaultProps: Pick<CoachmarkViewProps, 'position' | 'renderArrow'> = {
    position: 'top',
    renderArrow: ({ x, position }) => <CoachmarkArrow x={x} position={position} />,
  };

  renderCoachmarkContent() {
    return <CoachmarkContent message={this.props.message} />;
  }

  renderCoachmarkArrow() {
    const { renderArrow, x, position } = this.props;
    return renderArrow({ x, position });
  }

  render() {
    return this.props.position === 'top' ? (
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
