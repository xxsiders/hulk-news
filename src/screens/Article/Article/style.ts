import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const styles = () => {
    const { colors } = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1
        },
        image: {
            width: '100%',
            aspectRatio: 1.2
        },
        content: {
            padding: 12
        },
        title: {
            fontSize: 18,
            marginTop: 12,
            fontWeight: 'bold',
            color: colors.text
        },
        author: {
            fontSize: 14,
            opacity: 0.9,
            color: colors.primary,
            marginTop: 12
        },
        date: {
            fontSize: 12,
            opacity: 0.9,
            color: colors.text
        },
        description: {
            fontSize: 16,
            marginTop: 12,
            color: colors.text
        },
        contentText: {
            fontSize: 14,
            color: colors.text,
            marginTop: 12
        }


    })
}

export default styles
