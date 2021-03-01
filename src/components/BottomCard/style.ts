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
            width: width - 20,
            flexDirection: 'row',
            minHeight: 100
        },
        topCardImage: {
            height: '100%',
            flex: 1.5
        },
        content: {
            padding: 14,
            flex: 2
        },
        title: {
            fontSize: 14,
            fontWeight: "600",
            color: colors.text,
            marginBottom: 18
        },
        description: {
            fontSize: 10,
            color: colors.text + '77',
            fontWeight: 'bold'
        },
        sourceTitle: {
            color: colors.primary,
        }
    })
}

export default styles
