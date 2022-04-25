import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_83_11}>
        <View style={styles.View_4_12} />
        <View style={styles.View_4_9} />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_21}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_7_12} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68bf/c4d4/f43151be24cc577fad79606a256a3225"
          }}
          style={styles.ImageBackground_7_13}
        />
        <View style={styles.View_4_69}>
          <Text style={styles.Text_4_69}>Total asset</Text>
        </View>
        <View style={styles.View_4_70}>
          <Text style={styles.Text_4_70}>BND $0.00</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_4_71}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("83_14"))
          }
        >
          <Text style={styles.Text_4_71}>Transaction History</Text>
        </TouchableOpacity>
        <View style={styles.View_7_91}>
          <Text style={styles.Text_7_91}>LogOut</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98e0/75c3/7c2c42ba2b81616612af09aa4ebce858"
          }}
          style={styles.ImageBackground_4_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68d/5724/0fb7b6466735e0ba4dacb60729142ea3"
          }}
          style={styles.ImageBackground_4_76}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd88/10a4/1d2bfcc0c385e9f41c77c7c2b04503f7"
          }}
          style={styles.TouchableOpacity_4_77}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a349/1ae3/6d72c073c32844c70a97a33199ef152f"
          }}
          style={styles.ImageBackground_7_14}
        />
        <View style={styles.View_7_101}>
          <Text style={styles.Text_7_101}>BruSwipe</Text>
        </View>
        <View style={styles.View_4_68}>
          <Text style={styles.Text_4_68}>Top up</Text>
        </View>
        <View style={styles.View_7_15}>
          <Text style={styles.Text_7_15}>Transfer</Text>
        </View>
        <View style={styles.View_4_74}>
          <Text style={styles.Text_4_74}>Reward Point</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea5/1e16/ae205060288d9c8f4d333fdae3f58956"
          }}
          style={styles.TouchableOpacity_7_5}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_7_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78c/13e2/1b64c5ef497eaf893dc86020deb63d02"
            }}
            style={styles.ImageBackground_7_7}
          />
        </View>
        <View style={styles.View_38_98}>
          <Text style={styles.Text_38_98}>Welcome</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_83_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_12: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("28%"),
    backgroundColor: "rgba(63, 223, 214, 1)"
  },
  View_4_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 203, 125, 1)"
  },
  TouchableOpacity_4_21: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 136, 136, 1)",
    opacity: 0.7200000286102295
  },
  View_7_12: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    backgroundColor: "rgba(108, 228, 134, 1)",
    opacity: 0.8100000023841858
  },
  ImageBackground_7_13: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_4_69: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_4_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_70: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_4_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4_71: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_4_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_91: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_7_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_72: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("43%"),
    resizeMode: "cover"
  },
  ImageBackground_4_76: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  TouchableOpacity_4_77: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_7_14: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("56%")
  },
  View_7_101: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_7_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_68: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_4_68: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_15: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_15: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_74: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_4_74: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_5: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("56%")
  },
  View_7_6: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_7_7: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_38_98: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_38_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
