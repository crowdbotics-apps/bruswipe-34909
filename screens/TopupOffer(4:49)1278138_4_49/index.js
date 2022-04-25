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
      <View style={styles.View_87_41}>
        <View style={styles.View_4_51} />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_52}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_104"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_53}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_145"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_54}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_239"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_4_55}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_192"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.TouchableOpacity_4_67}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_7"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.ImageBackground_87_297}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99da/8111/0a49ff98d9121938b4fb58bcab3283ee"
          }}
          style={styles.TouchableOpacity_7_46}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_61"))
          }
        />
        <View style={styles.View_4_57}>
          <Text style={styles.Text_4_57}>Top up</Text>
        </View>
        <View style={styles.View_4_58}>
          <Text style={styles.Text_4_58}>$10</Text>
        </View>
        <View style={styles.View_4_59}>
          <Text style={styles.Text_4_59}>$15</Text>
        </View>
        <View style={styles.View_4_60}>
          <Text style={styles.Text_4_60}>$20</Text>
        </View>
        <View style={styles.View_4_61}>
          <Text style={styles.Text_4_61}>$30</Text>
        </View>
        <View style={styles.View_4_62}>
          <Text style={styles.Text_4_62}> Bonus $0.50 for 7 days</Text>
        </View>
        <View style={styles.View_4_63}>
          <Text style={styles.Text_4_63}> Bonus $1.00 for 30 days</Text>
        </View>
        <View style={styles.View_4_64}>
          <Text style={styles.Text_4_64}> Bonus $1.50 for 30 days</Text>
        </View>
        <View style={styles.View_4_65}>
          <Text style={styles.Text_4_65}> Bonus $0.50 for 20 days</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_87_41: {
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
  View_4_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 203, 125, 1)"
  },
  TouchableOpacity_4_52: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  TouchableOpacity_4_53: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("29%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  TouchableOpacity_4_54: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("57%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  TouchableOpacity_4_55: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("56%"),
    backgroundColor: "rgba(120, 228, 235, 1)"
  },
  TouchableOpacity_4_67: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_87_297: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  TouchableOpacity_7_46: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("6%")
  },
  View_4_57: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_4_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_58: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_4_58: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_59: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_4_59: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_60: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_4_60: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_61: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_4_61: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_62: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_4_62: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_63: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_4_63: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_64: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_4_64: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_65: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_4_65: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
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
