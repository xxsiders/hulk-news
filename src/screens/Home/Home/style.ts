import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const styles = () => {
    const { colors } = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
        },
        scrollContainer: {
            paddingTop: 12,
        },
        content: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
            overflow: 'hidden',
        },
        flexedContainer: {
            flex: 1
        },
        inputContainer: {
            borderWidth: 1,
            height: 35,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 12,
            width: '70%',
            maxWidth: 250,
            borderRadius: 6,
            borderColor: colors.card,
            alignSelf: 'center',
        },
        placeholder: {
            color: colors.text,
            opacity: 0.4
        },
    })
}

export default styles
