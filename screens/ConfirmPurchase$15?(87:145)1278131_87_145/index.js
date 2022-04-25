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
      <View style={styles.View_87_146}>
        <View style={styles.View_87_147} />
        <View style={styles.View_87_148} />
        <View style={styles.View_87_149} />
        <View style={styles.View_87_150} />
        <View style={styles.View_87_151} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.ImageBackground_87_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99da/8111/0a49ff98d9121938b4fb58bcab3283ee"
          }}
          style={styles.ImageBackground_87_153}
        />
        <View style={styles.View_87_154}>
          <Text style={styles.Text_87_154}>Top up</Text>
        </View>
        <View style={styles.View_87_155}>
          <Text style={styles.Text_87_155}>$10</Text>
        </View>
        <View style={styles.View_87_156}>
          <Text style={styles.Text_87_156}>$15</Text>
        </View>
        <View style={styles.View_87_157}>
          <Text style={styles.Text_87_157}>$20</Text>
        </View>
        <View style={styles.View_87_158}>
          <Text style={styles.Text_87_158}>$30</Text>
        </View>
        <View style={styles.View_87_159}>
          <Text style={styles.Text_87_159}> Bonus $0.50 for 7 days</Text>
        </View>
        <View style={styles.View_87_160}>
          <Text style={styles.Text_87_160}> Bonus $1.00 for 30 days</Text>
        </View>
        <View style={styles.View_87_161}>
          <Text style={styles.Text_87_161}> Bonus $1.50 for 30 days</Text>
        </View>
        <View style={styles.View_87_162}>
          <Text style={styles.Text_87_162}> Bonus $0.50 for 20 days</Text>
        </View>
      </View>
      <View style={styles.View_87_163}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8cd/1b8c/09622fae84ff50560a35e02d934c881c"
          }}
          style={styles.ImageBackground_87_164}
        />
        <View style={styles.View_87_165}>
          <Text style={styles.Text_87_165}>Confirm on purchase $15 ? </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_87_166}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_170"))
          }
        />
        <View style={styles.View_87_167}>
          <Text style={styles.Text_87_167}>Yes</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_87_168}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_87_169}>
          <Text style={styles.Text_87_169}>No</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_87_146: {
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
  View_87_147: {
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
  View_87_148: {
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
  View_87_149: {
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
  View_87_150: {
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
  View_87_151: {
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
  ImageBackground_87_152: {
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
  ImageBackground_87_153: {
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
  View_87_154: {
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
  Text_87_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_155: {
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
  Text_87_155: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_156: {
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
  Text_87_156: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_157: {
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
  Text_87_157: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_158: {
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
  Text_87_158: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_159: {
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
  Text_87_159: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_160: {
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
  Text_87_160: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_161: {
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
  Text_87_161: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_162: {
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
  Text_87_162: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_163: {
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
  ImageBackground_87_164: {
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
  View_87_165: {
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
  Text_87_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_87_166: {
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
  View_87_167: {
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
  Text_87_167: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_87_168: {
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
  View_87_169: {
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
  Text_87_169: {
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
