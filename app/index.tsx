import React, { useState } from "react";
import {
  View,
  Text,
  Input,
  Button,
  YStack,
  XStack,
  H2,
  H3,
  Paragraph,
  Slider,
  ScrollView,
} from "tamagui";
import { SafeAreaView } from "react-native";

import { Sparkles } from "@tamagui/lucide-icons";

import SuggestionCard from "../components/UI/SuggestionCard";
import AnimatedSuccess from "../components/UI/AnimatedSuccess";
import { moodOptions, getAISuggestions } from "../components/UI/AiSuggestions";
import { MoodCard } from "../components/UI/CardMood";
import { COLORS } from "../constants/Colors";

// Common styles
const commonStyles = {
  card: {
    padding: "$6",
    borderRadius: "$6",
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  button: {
    size: "$4",
    borderRadius: "$6",
    pressStyle: { scale: 0.98 },
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    fontWeight: "600",
    fontSize: "$4",
  },
  text: {
    color: COLORS.text,
    fontWeight: "500",
  },
} as const;

const StyledButton = ({
  onPress,
  disabled = false,
  children,
  backgroundColor = COLORS.primary,
  ...props
}: {
  onPress: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}) => (
  <Button
    backgroundColor={disabled ? COLORS.disabled : backgroundColor}
    color={COLORS.white}
    onPress={onPress}
    disabled={disabled}
    {...commonStyles.button}
    {...props}
  >
    {children}
  </Button>
);

export default function Home() {
  const [mood, setMood] = useState<string>("");
  const [sleepHours, setSleepHours] = useState(7);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);

  const handleSubmit = () => {
    if (!mood) return;
    setIsSubmitted(true);
    setShowSuccess(true);
  };

  const handleAnimationComplete = () => setShowSuccess(false);

  const resetForm = () => {
    setMood("");
    setSleepHours(7);
    setNotes("");
    setIsSubmitted(false);
    setShowSuccess(true);
  };

  const renderSuggestions = () => (
    <>
      <YStack space="$3" alignItems="center" marginBottom="$4">
        <Sparkles size={36} color={COLORS.primary} />
        <H3 color={COLORS.text} textAlign="center" fontWeight="600">
          Personalized Suggestions
        </H3>
        <Paragraph
          color={COLORS.textSecondary}
          textAlign="center"
          fontSize="$4"
        >
          Based on your mood and sleep data
        </Paragraph>
      </YStack>

      <YStack space="$3" width="100%">
        {getAISuggestions(mood, sleepHours).map((suggestion, index) => (
          <SuggestionCard key={index} suggestion={suggestion} />
        ))}
      </YStack>

      <StyledButton onPress={resetForm} marginTop="$4" width="100%">
        Done
      </StyledButton>
    </>
  );

  const renderForm = () => (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: COLORS.background,
      }}
      flex={1}
      padding="$6"
      backgroundColor={COLORS.background}
    >
      <YStack space="$8" alignItems="center" maxWidth={500} alignSelf="center">
        <YStack space="$3" alignItems="center">
          <H2 color={COLORS.text} textAlign="center" fontWeight="600">
            Health Check-in
          </H2>
        </YStack>

        {/* Mood Selection */}
        <YStack space="$5" width="100%">
          <Paragraph
            color={COLORS.textSecondary}
            fontSize="$5"
            textAlign="center"
            fontWeight="500"
          >
            How are you feeling today?
          </Paragraph>
          <XStack flexWrap="wrap" justifyContent="center" gap="$2">
            {moodOptions.map((option) => (
              <MoodCard
                key={option.id}
                option={option}
                isSelected={mood === option.id}
                onPress={() => setMood(option.id)}
              />
            ))}
          </XStack>
        </YStack>

        {/* Sleep Hours Slider */}
        <YStack space="$5" width="100%">
          <Text
            fontSize="$5"
            color={COLORS.text}
            textAlign="center"
            fontWeight="500"
          >
            Sleep hours last night
          </Text>

          <YStack space="$4" alignItems="center">
            <Text fontSize="$7" fontWeight="600" color={COLORS.primary}>
              {`${sleepHours} ${sleepHours > 1 ? "Hours" : "Hour"}`}
            </Text>
            <Slider
              size="$3"
              width={320}
              defaultValue={[sleepHours]}
              min={1}
              max={24}
              step={0.5}
              onValueChange={(value: number[]) => setSleepHours(value[0])}
            >
              <Slider.Track
                backgroundColor={COLORS.sliderBg}
                height={8}
                borderRadius="$4"
              >
                <Slider.TrackActive
                  backgroundColor={COLORS.secondary}
                  height={8}
                  borderRadius="$4"
                />
              </Slider.Track>
              <Slider.Thumb
                index={0}
                circular
                backgroundColor={COLORS.primary}
                size={24}
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.2}
                shadowRadius={4}
                elevation={4}
              />
            </Slider>
          </YStack>
        </YStack>

        {/* Notes Input */}
        <YStack space="$4" width="100%">
          <Text
            fontSize="$4"
            color={COLORS.text}
            textAlign="center"
            fontWeight="500"
          >
            Notes (optional)
          </Text>
          <Input
            size="$4"
            borderWidth={1}
            borderColor={COLORS.border}
            borderRadius="$6"
            placeholder="How are you feeling? Any concerns or highlights?"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            padding="$4"
            backgroundColor={COLORS.white}
            color={COLORS.text}
            placeholderTextColor={COLORS.textLight}
            shadowColor="#000"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.05}
            shadowRadius={3}
            elevation={2}
          />

          <StyledButton onPress={handleSubmit} disabled={!mood}>
            Submit
          </StyledButton>
        </YStack>
      </YStack>
    </ScrollView>
  );

  const content = isSubmitted ? (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$6"
      backgroundColor={COLORS.background}
    >
      <YStack
        {...commonStyles.card}
        alignItems="center"
        maxWidth={400}
        width="100%"
      >
        {showSuccess ? (
          <AnimatedSuccess onAnimationComplete={handleAnimationComplete} />
        ) : (
          renderSuggestions()
        )}
      </YStack>
    </View>
  ) : (
    renderForm()
  );

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 32, backgroundColor: COLORS.background }}
    >
      {content}
    </SafeAreaView>
  );
}
