import React, { Component } from "react";
import {Text, View, ImageBackground, SafeAreaView, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {Swipeable} from "react-native-gesture-handler"
import { TouchableWithoutFeedback, SectionList, FlatList } from 'react-native-gesture-handler'


class PersonProfile extends Component{
    constructor(props) {
        super(props)
        let tokens = []
        let i = 0
        for(i = 0; i < this.props.profileInfo.images.length; i++){
            const is0 = (i===0)? true : false
            tokens.push({
                number : i,
                isCurr : is0,
                key : i.toString()

            })
        }
        this.state = {
            picIndex : 0,
            pics : this.props.profileInfo.images,
            imageTokens : tokens
            }
    }
    async changeImage(num) {
        if(this.state.picIndex === this.state.pics.length - 1 && num === 1){
            return
        }
        if(this.state.picIndex === 0 && num === -1){
            return
        }
        await this.setState(prevState => {
            let imgTok = Object.assign({}, prevState.imageTokens)
            imgTok[this.state.picIndex].isCurr = false
            return imgTok
        })
        await this.setState({
            picIndex: this.state.picIndex + num
        })
        await this.setState(prevState => {
            let imgTok = Object.assign({}, prevState.imageTokens)
            imgTok[this.state.picIndex].isCurr = true
            return imgTok
        })
    }

    render(){
        console.log("RENDER")
        console.log(this.state.imageTokens)
        console.log(this.state.pics[0])
        console.log(this.state.pics[this.state.picIndex])
        return(
            <View style = {styles.ProfileMain}>
                <ImageBackground style = {styles.ImageRow} source={{uri: this.state.pics[this.state.picIndex]}}> 
                    <SafeAreaView style={styles.imageIndicator}>
                        {this.state.imageTokens.map(pictureToken => {return pictureToken.isCurr?(<View key = {pictureToken.key} style = {styles.imageTokenSelected}></View>):(<View key={pictureToken.key} style={styles.imageToken}></View>)})}
                    </SafeAreaView>
                    <Image source={{uri:this.state.pics[0]}}></Image>
                            
                    <View style = {styles.TouchableHolder}>
                        <TouchableWithoutFeedback title="GoLeft" style = {styles.TO} underlayColor="rgba(52, 52, 52, 0.5)" onPress={() => this.changeImage(-1)}>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style = {styles.TO} title="GoRight"  underlayColor="rgba(52, 52, 52, 0.5)" onPress={() => this.changeImage(1)}>
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
            </View>
        )
    }
} 

const LeftAction = () => (
    <View style={styles.backgroundColor}>
        <Text>YAY</Text>
    </View>
)

const ImageToken = ({ currStatus }) => (
    // currStatus ?
    // <View style={styles.imageTokenSelected}></View> :
    <View style={styles.imageToken}></View>
    );

const Item = ({ title }) => (
    <View style = {styles.newMatch}>
        <Image style={styles.thumbnail} source = {{uri: "https://i.pinimg.com/736x/ce/35/a2/ce35a263dba9ac3cf5370a84f489b04f.jpg"}}></Image>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
    );
    
const styles = {
    LeftAction : {
        backgroundColor : "green"
    },
    thing : {
        backgroundColor : "blue",
        height : 100,
        width : 100
    },
    ProfileMain : {
        backgroundColor : "goldenrod",
        flex : 1,
        height : "100%",
    },
    ImageRow : {
        resizeMode: 'cover',
        alignItems : "center"
        },
    TO : {
        height : "100%",
        width : 100,
        justifyContent : "center",
        alignItems : "center",
    },
    imageIndicator : {
        backgroundColor : "white",
        width : "80%",
        height : "2%",
        marginTop : 10,
        borderRadius : 20,
        flexDirection : "row",
        opacity : 0.2
    },
    imageToken : {
        backgroundColor : "black",
        flex : 1,
        margin : 1,
        borderRadius : 20,
        opacity : 0.5
    },
    imageTokenSelected : {
        backgroundColor : "black",
        flex : 1,
        margin : 1,
        width : 20,
        borderRadius : 20,
        opacity : 0.8
    },
    TouchableHolder : {
        width : "100%",
        height : "100%",
        flexDirection : "row",
        justifyContent : "space-between",
        zIndex : 1,
    }
}
export default PersonProfile