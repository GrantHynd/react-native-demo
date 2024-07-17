import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { styled } from 'nativewind';

const StyledText = styled(Text);

export type ThemedTextProps = TextProps & {
  className?: string;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  className,
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const getTypeClassName = () => {
    switch (type) {
      case 'default':
        return 'text-base';
      case 'title':
        return 'text-3xl font-bold';
      case 'defaultSemiBold':
        return 'text-base font-semibold';
      case 'subtitle':
        return 'text-lg font-bold';
      case 'link':
        return 'text-base text-blue-500';
    }
  };

  return (
    <StyledText
      className={`${className} ${getTypeClassName()}`}
      style={[{ color }, style]}
      {...rest}
    />
  );
}
