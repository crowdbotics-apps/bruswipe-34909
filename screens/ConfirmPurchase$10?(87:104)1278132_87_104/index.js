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
      <View style={styles.View_87_105}>
        <View style={styles.View_87_106} />
        <View style={styles.View_87_107} />
        <View style={styles.View_87_108} />
        <View style={styles.View_87_109} />
        <View style={styles.View_87_110} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.ImageBackground_87_111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99da/8111/0a49ff98d9121938b4fb58bcab3283ee"
          }}
          style={styles.ImageBackground_87_112}
        />
        <View style={styles.View_87_113}>
          <Text style={styles.Text_87_113}>Top up</Text>
        </View>
        <View style={styles.View_87_114}>
          <Text style={styles.Text_87_114}>$10</Text>
        </View>
        <View style={styles.View_87_115}>
          <Text style={styles.Text_87_115}>$15</Text>
        </View>
        <View style={styles.View_87_116}>
          <Text style={styles.Text_87_116}>$20</Text>
        </View>
        <View style={styles.View_87_117}>
          <Text style={styles.Text_87_117}>$30</Text>
        </View>
        <View style={styles.View_87_118}>
          <Text style={styles.Text_87_118}> Bonus $0.50 for 7 days</Text>
        </View>
        <View style={styles.View_87_119}>
          <Text style={styles.Text_87_119}> Bonus $1.00 for 30 days</Text>
        </View>
        <View style={styles.View_87_120}>
          <Text style={styles.Text_87_120}> Bonus $1.50 for 30 days</Text>
        </View>
        <View style={styles.View_87_121}>
          <Text style={styles.Text_87_121}> Bonus $0.50 for 20 days</Text>
        </View>
      </View>
      <View style={styles.View_87_143}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8cd/1b8c/09622fae84ff50560a35e02d934c881c"
          }}
          style={styles.ImageBackground_8_6}
        />
        <View style={styles.View_8_8}>
          <Text style={styles.Text_8_8}>Confirm on purchase $10 ? </Text>
        </View>
        <View style={styles.View_8_9} />
        <TouchableOpacity
          style={styles.TouchableOpacity_8_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_122"))
          }
        >
          <Text style={styles.Text_8_10}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_11}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_8_12}>
          <Text style={styles.Text_8_12}>No</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_87_105: {
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
  View_87_106: {
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
  View_87_107: {
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
  View_87_108: {
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
  View_87_109: {
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
  View_87_110: {
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
  ImageBackground_87_111: {
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
  ImageBackground_87_112: {
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
  View_87_113: {
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
  Text_87_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_114: {
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
  Text_87_114: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_115: {
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
  Text_87_115: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_116: {
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
  Text_87_116: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_117: {
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
  Text_87_117: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_118: {
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
  Text_87_118: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_119: {
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
  Text_87_119: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_120: {
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
  Text_87_120: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_121: {
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
  Text_87_121: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_143: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_8_6: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_8: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_8_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_9: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("16%"),
    backgroundColor: "rgba(220, 166, 61, 1)"
  },
  TouchableOpacity_8_10: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_8_10: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_11: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("29%"),
    backgroundColor: "rgba(220, 166, 61, 1)",
    opacity: 0.7099999785423279
  },
  View_8_12: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_8_12: {
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
