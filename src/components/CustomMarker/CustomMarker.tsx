import { Text, View } from "react-native";
import fonts from "../../utils/fonts";

// ✅ CustomMarker.tsx
const CustomMarker = ({
  currentValue,
  isPrice = false,
}: {
  currentValue: number;
  isPrice?: boolean;
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 3,
          borderColor: '#FF8000',
          backgroundColor: '#fff',
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 30,
          fontSize: 12,
          color: '#FF8000',
          fontFamily: fonts.SemiBold,
          fontWeight: '800',
        }}
      >
        {isPrice ? `$${currentValue}` : currentValue}
      </Text>
    </View>
  );
};
export default CustomMarker;