import React from "react";
import { View, Image, ScrollView, ImageBackground } from "react-native";
import { styles } from "./style";
import { BtnStage } from "../../components/BtnStage/BtnStage";
import montes from "../../../assets/montes.png"
import tesouro from "../../../assets/tesouro.png"


export function Home() {
    return(
        <ScrollView >
            <View style={styles.container}>
                <ImageBackground 
                source={require('../../../assets/fundo2.png')}
                style={styles.fundo1}>
                    <View style={{marginLeft: 120}}>
                        <BtnStage />
                    </View>
                    <Image source={montes} style={{position: "absolute", left: -10,
                    top: 10, opacity: 0.5,
                    }}/>
                    <BtnStage />
                    <View style={{marginRight: 120}}>
                        <BtnStage />
                    </View>
                </ImageBackground>
                <ImageBackground 
                source={require("../../../assets/fundo1.png")}
                style={styles.fundo2}>
                    <View style={{marginLeft: -30}}>
                        <BtnStage />
                    </View>
                    <View style={{marginLeft: 100}}>
                        <BtnStage />
                    </View>
                    <View style={{marginRight: 30}}>
                        <BtnStage />
                    </View>
                    <Image source={tesouro} style={{position: "absolute", left: 150,
                    top: 170, opacity: 0.5,
                    }}/>
                    <View style={{marginRight: 150}}>
                        <BtnStage />
                    </View>
                    <View>
                        <BtnStage />
                    </View>
                </ImageBackground>
                
            </View>
        </ScrollView>
    )
}