import { StyleProp, ViewStyle } from "react-native";

export interface CoachmarkProps {
  message?: string,
  autoShow?: boolean,
  onHide?: () => void,
  onShow?: () => void,
  isAnchorReady?: boolean,
  renderArrow?: () => void,
  accessibilityLabel?: string,
  testID?: string,
  contentContainerStyle?: StyleProp<ViewStyle>
}

export type CoachmarkPosition = 'top' | 'bottom'