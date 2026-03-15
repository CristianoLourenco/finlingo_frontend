import { Link } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Olho from "../../../assets/olho.png"
import { styles } from "./style";
import { BtnClose } from "../../components/BtnClose/BtnClose";

export function Cadastro() {
    return(
        <View style={{gap: 200}}>
            <View style={{gap: 80, marginTop: 50}}>
                <View style={{flexDirection: "row"}}>
                    <BtnClose />
                    <Text style={styles.textHeader}>
                        Insira os seus dados
                    </Text>
                </View>
                    <View style={styles.containerLogIn}>
                        <View style={styles.inputLogInU}>
                            <TextInput placeholder="Usuário" style={styles.Input} />
                        </View>

                        <View style={styles.inputLogInE}>
                            <TextInput placeholder="E-mail" style={styles.Input} />
                        </View>
                            
                        <View style={styles.inputLogInS}>
                            <TextInput placeholder="Senha" style={styles.Input} />
                            <Image source={Olho} style={{width: 30, height: 20, marginLeft: -25}} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Button}> 
                        <Text style={styles.Letter}>Entrar</Text>
                    </TouchableOpacity>
                <Text style={styles.link}>
                    
                </Text>
            </View>
            <Text style={styles.incentivo}>Use o Finlingo para aprender a construir o seu futuro financeiro</Text>
        </View>
    )
}