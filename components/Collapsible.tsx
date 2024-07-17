import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <StyledTouchableOpacity
        className='flex-row items-center gap-1.5'
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type='defaultSemiBold'>{title}</ThemedText>
      </StyledTouchableOpacity>
      {isOpen && <ThemedView className='mt-1.5 ml-6'>{children}</ThemedView>}
    </ThemedView>
  );
}
