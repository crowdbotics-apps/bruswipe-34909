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
      <View style={styles.View_82_7}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8965/7c66/319a046608d552b4f2d6880316f2450f"
          }}
          style={styles.ImageBackground_61_12}
        />
        <View style={styles.View_3_27} />
        <View style={styles.View_3_29} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d969/15e8/6b70c4a1d356b005c48951e2710bb23c"
          }}
          style={styles.ImageBackground_3_34}
        />
        <View style={styles.View_4_2} />
        <View style={styles.View_4_34} />
        <View style={styles.View_3_28}>
          <Text style={styles.Text_3_28}>First Name</Text>
        </View>
        <View style={styles.View_3_32}>
          <Text style={styles.Text_3_32}>Last Name</Text>
        </View>
        <View style={styles.View_3_33}>
          <Text style={styles.Text_3_33}>Email</Text>
        </View>
        <View style={styles.View_4_3}>
          <Text style={styles.Text_4_3}>Password</Text>
        </View>
        <View style={styles.View_4_35}>
          <Text style={styles.Text_4_35}>Re-Type Password</Text>
        </View>
        <View style={styles.View_4_36}>
          <Text style={styles.Text_4_36}>
            I have agreed to the terms and conditions
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41cf/6e2d/cbad8edb6ffd651be85a407e161f15d7"
          }}
          style={styles.ImageBackground_4_46}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_47}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2"))
          }
        >
          <Text style={styles.Text_4_47}>Already have an account?</Text>
        </TouchableOpacity>
        <View style={styles.View_2_44}>
          <Text style={styles.Text_2_44}>Create account</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_38_94}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_7"))
          }
        />
        <View style={styles.View_38_95}>
          <Text style={styles.Text_38_95}>Create account</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_82_7: {
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
  ImageBackground_61_12: {
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
  View_3_27: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  View_3_29: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  ImageBackground_3_34: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_4_2: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  View_4_34: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("74%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  View_3_28: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_3_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_32: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_3_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_33: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_3_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_3: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_4_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_35: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_4_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_36: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_4_36: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_46: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("86%"),
    resizeMode: "cover"
  },
  TouchableOpacity_4_47: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_4_47: {
    color: "rgba(65, 159, 114, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_44: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_38_94: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("92%"),
    backgroundColor: "rgba(220, 166, 61, 1)"
  },
  View_38_95: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_38_95: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
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
