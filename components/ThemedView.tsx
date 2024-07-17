import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { styled } from 'nativewind';

const StyledView = styled(View);

export type ThemedViewProps = ViewProps & {
  className?: string;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  className,
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <StyledView
      style={[{ backgroundColor }, style]}
      className={className}
      {...otherProps}
    />
  );
}
