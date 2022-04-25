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
      <View style={styles.View_82_6}>
        <TouchableOpacity
          style={styles.TouchableOpacity_4_38}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("89_301"))
          }
        >
          <Text style={styles.Text_4_38}>Foget password ?</Text>
        </TouchableOpacity>
        <View style={styles.View_2_20} />
        <View style={styles.View_2_22} />
        <View style={styles.View_2_24} />
        <TouchableOpacity
          style={styles.TouchableOpacity_2_25}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("96_6"))
          }
        />
        <View style={styles.View_2_21}>
          <Text style={styles.Text_2_21}>Email</Text>
        </View>
        <View style={styles.View_2_23}>
          <Text style={styles.Text_2_23}>Password</Text>
        </View>
        <View style={styles.View_2_26}>
          <Text style={styles.Text_2_26}>Login</Text>
        </View>
        <View style={styles.View_4_39}>
          <Text style={styles.Text_4_39}>Don’t have an account ?</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_38_96}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_32"))
          }
        >
          <Text style={styles.Text_38_96}>Create new account</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8965/7c66/319a046608d552b4f2d6880316f2450f"
          }}
          style={styles.ImageBackground_61_11}
        />
        <View style={styles.View_2_8}>
          <Text style={styles.Text_2_8}>BruSwipe</Text>
        </View>
        <View style={styles.View_3_10}>
          <View style={styles.View_3_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/fe0e/11c96be772d043b60a6a050a173622e8"
              }}
              style={styles.ImageBackground_3_6}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_82_6: {
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
  TouchableOpacity_4_38: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_4_38: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_20: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  View_2_22: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  View_2_24: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  TouchableOpacity_2_25: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("78%"),
    backgroundColor: "rgba(220, 166, 61, 1)"
  },
  View_2_21: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_23: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_2_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_26: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_2_26: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_39: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_4_39: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_38_96: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_38_96: {
    color: "rgba(65, 159, 114, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_8: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_10: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("6%")
  },
  View_3_5: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_6: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
