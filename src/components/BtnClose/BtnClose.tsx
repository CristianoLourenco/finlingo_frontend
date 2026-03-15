import { Image, TouchableOpacity} from "react-native"
import Close from "../../../assets/olho.png"

import { useNavigation } from "@react-navigation/native"
import { styles } from "./style"
import { Button } from "@react-navigation/elements"

export function BtnClose() {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.container}>
            <Button >
                <Image source={Close} style={styles.image} />
            </Button>
        </TouchableOpacity>
    )
}
