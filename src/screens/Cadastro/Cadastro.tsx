import { Link } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { useState } from "react";
import Olho from "../../../assets/olho.png"
import { styles } from "./style";
import { BtnClose } from "../../components/BtnClose/BtnClose";
import { LogIn } from "../LogIn/LogIn";
import google from "../../../assets/google.png"
import { Home } from "../Home/Home"
import { TabRoutes } from "../../routes/tabs.routes";


export function Cadastro() {
    const [isInsideTabs, setIsInsideTabs] = useState(false)
    return(
        <View style={styles.Container}>
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
                    <TouchableOpacity style={styles.Button} goToTabsonPress={goToTabs}> 
                        <Text style={styles.Letter}>
                                Entrar 
                        </Text>
                    </TouchableOpacity>
                <Text style={styles.link}>
                   <Link screen="LogIn"> JÁ TENHO UMA CONTA </Link>
                </Text>
            </View>
            <View style={{ gap: 50 }}>
                <View style={styles.googleContainer}>
                    <Image source={google} style={styles.googleImage} />
                    <Text style={styles.googleText}>Entra com o Google</Text>
                </View>
                <Text style={styles.incentivo}>Use o Finlingo para aprender a construir o seu futuro financeiro</Text>
            </View>
        </View>
    )
}