import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const styles = () => {
    const { colors } = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1,
            paddingTop:12
        },
        image: {
            width: '100%',
            aspectRatio: 1.2
        },
        content: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12
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
            alignSelf: 'center'
        },
        input: {
            width: '100%',
            color: colors.text
        },
        searchButton: {
            marginHorizontal: 12,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            borderRadius: 6
        },
        search: {
            color: '#fff',
            fontWeight: 'bold'
        }
    })
}

export default styles
