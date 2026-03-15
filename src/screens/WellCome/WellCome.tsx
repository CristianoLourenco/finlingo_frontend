import { View, Image, Text } from 'react-native';
import { styles } from './style';
import { Logo } from "../../components/Logo/Logo"
import Porquinho from "../../../assets/porquinho.png"
import { BtnStart } from '../../components/BtnStart/BtnStart';

export function WelCome(){
    return(
        <View style={styles.container}>
            <View style={styles.ild}>
              <Image source={Porquinho} style={styles.image} />
              <Logo />  
                <Text style={styles.descrition}>A forma grátis, divertida e eficaz de aprender e construir o teu futuro financeiro</Text>
            </View>
            <View style={styles.btn}>
                <BtnStart />    
            </View>
        </View>
    )

}