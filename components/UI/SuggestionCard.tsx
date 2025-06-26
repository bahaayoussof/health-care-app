import React from "react";
import { View, Text, YStack, XStack, Paragraph } from "tamagui";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function SuggestionCard({ suggestion }: { suggestion: any }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 100 });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "$red8";
      case "medium":
        return "$orange8";
      case "low":
        return "$blue8";
      default:
        return "$gray8";
    }
  };

  return (
    <Animated.View style={animatedStyle}>
      <View
        backgroundColor="$gray2"
        padding="$4"
        borderRadius="$4"
        borderWidth={1}
        borderColor="$gray4"
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        pressStyle={{ backgroundColor: "$gray3" }}
        minWidth={320}
        space="$2"
      >
        <XStack space="$3" alignItems="flex-start">
          <Text fontSize={24}>{suggestion.icon}</Text>
          <YStack flex={1} space="$1">
            <XStack space="$2" alignItems="center">
              <Text fontSize="$4" fontWeight="600" color="$gray12">
                {suggestion.title}
              </Text>
              <View
                backgroundColor={getPriorityColor(suggestion.priority)}
                paddingHorizontal="$2"
                paddingVertical="$1"
                borderRadius="$2"
              >
                <Text fontSize="$1" color="white" fontWeight="500">
                  {suggestion.priority}
                </Text>
              </View>
            </XStack>
            <Paragraph color="$gray11" fontSize="$3">
              {suggestion.text}
            </Paragraph>
          </YStack>
        </XStack>
      </View>
    </Animated.View>
  );
}
