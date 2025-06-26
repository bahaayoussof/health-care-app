import React, { useEffect } from "react";
import {
  View,
  Text,
  YStack,
  H2,
  Paragraph,
  Spinner,
} from "tamagui";

import { CheckCircle } from "@tamagui/lucide-icons";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedSuccess({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Simple spring animation
    scale.value = withSpring(1, { damping: 12, stiffness: 100 });
    opacity.value = withTiming(1, { duration: 500 });

    // Trigger completion callback after animation
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <YStack space="$4" alignItems="center">
        <View
          backgroundColor="$green2"
          borderRadius="$10"
          padding="$6"
          borderWidth={2}
          borderColor="$green8"
        >
          <CheckCircle size={64} color="$green10" />
        </View>
        <YStack space="$2" alignItems="center">
          <H2 color="$green10" textAlign="center">
            Success!
          </H2>
          <Paragraph color="$gray11" textAlign="center">
            Your health data has been recorded
          </Paragraph>
        </YStack>

        <Spinner size="large" color="$blue10" />
        <YStack space="$2" alignItems="center" marginTop="$3">
          <Text fontSize="$4" fontWeight="600" color="$gray12">
            Generating Suggestions
          </Text>
          <Paragraph color="$gray11" textAlign="center">
            Analyzing your mood and sleep data...
          </Paragraph>
        </YStack>
      </YStack>
    </Animated.View>
  );
}
