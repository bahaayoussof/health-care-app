import { COLORS } from "../../constants/Colors";
import { View, Text } from "tamagui";

export const MoodCard = ({
  option,
  isSelected,
  onPress,
}: {
  option: any;
  isSelected: boolean;
  onPress: () => void;
}) => (
  <View
    backgroundColor={isSelected ? COLORS.primary : COLORS.cardBg}
    padding="$4"
    borderRadius="$6"
    paddingVertical={4}
    borderWidth={1}
    borderColor={isSelected ? COLORS.primary : COLORS.border}
    onPress={onPress}
    pressStyle={{ scale: 0.95 }}
    alignItems="center"
    minWidth={75}
    shadowColor="#000"
    shadowOffset={{ width: 0, height: 2 }}
    shadowOpacity={isSelected ? 0.15 : 0.05}
    shadowRadius={isSelected ? 6 : 4}
    elevation={isSelected ? 4 : 2}
  >
    <Text fontSize={28} marginBottom="$2">
      {option.emoji}
    </Text>
    <Text
      color={isSelected ? COLORS.white : COLORS.textSecondary}
      fontSize="$3"
      fontWeight={isSelected ? "600" : "500"}
    >
      {option.label}
    </Text>
  </View>
);
