import React, { Component } from 'react';
import CoachmarkContent from './CoachmarkContent';
import CoachmarkArrow from './CoachmarkArrow';
import { CoachmarkPosition, CoachmarkViewProps } from '../types';

export default class CoachmarkView extends Component<CoachmarkViewProps> {
  static defaultProps: Pick<CoachmarkViewProps, 'position' | 'coachmarkContent' | 'renderArrow'> = {
    position: CoachmarkPosition.TOP,
    coachmarkContent: null,
    renderArrow: ({ x, position }) => <CoachmarkArrow x={x} position={position} />,
  };

  renderCoachmarkContent() {
    return <CoachmarkContent message={this.props.message} coachmarkContent={this.props.coachmarkContent} />;
  }

  renderCoachmarkArrow() {
    const { renderArrow, x, position, showArrow } = this.props;
    if (!showArrow) {
      return null;
    }
    return renderArrow({ x, position });
  }

  render() {
    return this.props.position === CoachmarkPosition.TOP ? (
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
