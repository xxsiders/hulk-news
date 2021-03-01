import { useTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet } from "react-native";

const styles = () => {
    const { colors } = useTheme()
    const { width } = Dimensions.get('window')

    return StyleSheet.create({
        topCard: {
            shadowColor: '#aaa',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
        },
        cardContainer: {
            backgroundColor: colors.card,
            marginTop: 14,
            margin: 10,
            borderRadius: 6,
            overflow: 'hidden',
            width: width / 1.25 - 20,
        },
        topCardImage: {
            height: 160,
            width: '100%'
        },
        content: {
            padding: 14
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
            color: colors.text,
            marginBottom: 18
        },
        description: {
            fontSize: 13,
            color: colors.text + '77',
            fontWeight: 'bold'
        },
        sourceTitle: {
            color: colors.primary,
        }
    })
}

export default styles
