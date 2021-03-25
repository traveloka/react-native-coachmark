import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface CoachmarkProps {
  message?: string;
  autoShow?: boolean;
  showArrow: boolean;
  coachmarkContent: (() => React.Component) | null;
  onHide?: () => void;
  onShow?: () => void;
  isAnchorReady?: boolean;
  renderArrow?: CoachmarkViewProps['renderArrow'];
  accessibilityLabel?: string;
  testID?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export enum CoachmarkPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface CoachmarkArrowProps {
  position?: CoachmarkPosition;
  x: number;
}

export interface CoachmarkContentProps {
  message: string;
  buttonText?: string;
  coachmarkContent: (() => React.Component) | null;
}

export type CoachmarkViewProps = {
  showArrow?: boolean;
  coachmarkContent?: (() => React.Component) | null;
  renderArrow: ({
    x,
    position,
  }: {
    x: number;
    position?: CoachmarkPosition;
  }) => React.ReactElement<CoachmarkArrowProps>;
} & CoachmarkContentProps &
  CoachmarkArrowProps;
