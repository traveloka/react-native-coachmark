import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface CoachmarkProps {
  message?: string;
  autoShow?: boolean;
  showArrow: boolean;
  coachmarkContent?: (() => void) | null;
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
  coachmarkContent?: (() => void) | null;
}

export type CoachmarkViewProps = {
  coachmarkContent: (() => void) | null;
  renderArrow: ({
    x,
    position,
  }: {
    x: number;
    position?: CoachmarkPosition;
  }) => React.ReactElement<CoachmarkArrowProps>;
} & CoachmarkContentProps &
  CoachmarkArrowProps;
