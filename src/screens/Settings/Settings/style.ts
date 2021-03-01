import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const styles = () => {
    const { colors } = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1
        },
        switch: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            justifyContent: 'space-between'
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: '10%'
        },
        langButton: {
            width: 50,
            borderRadius: 6,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.primary + '75'
        },
        title: {
            color: colors.text,
            fontWeight: 'bold',
            padding: 12
        },
        locale: {
            textTransform: 'uppercase',
            color:colors.text
        }
    })
}

export default styles
