import { Button } from "@react-navigation/elements"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

export function BtnStart() {
    return(
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.Letter}>COMEÇAR AGORA</Text>
        </TouchableOpacity>
    ) 
}