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
      <View style={styles.View_87_171}>
        <View style={styles.View_87_172} />
        <View style={styles.View_87_173} />
        <View style={styles.View_87_174} />
        <View style={styles.View_87_175} />
        <View style={styles.View_87_176} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.ImageBackground_87_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99da/8111/0a49ff98d9121938b4fb58bcab3283ee"
          }}
          style={styles.ImageBackground_87_178}
        />
        <View style={styles.View_87_179}>
          <Text style={styles.Text_87_179}>Top up</Text>
        </View>
        <View style={styles.View_87_180}>
          <Text style={styles.Text_87_180}>$10</Text>
        </View>
        <View style={styles.View_87_181}>
          <Text style={styles.Text_87_181}>$15</Text>
        </View>
        <View style={styles.View_87_182}>
          <Text style={styles.Text_87_182}>$20</Text>
        </View>
        <View style={styles.View_87_183}>
          <Text style={styles.Text_87_183}>$30</Text>
        </View>
        <View style={styles.View_87_184}>
          <Text style={styles.Text_87_184}> Bonus $0.50 for 7 days</Text>
        </View>
        <View style={styles.View_87_185}>
          <Text style={styles.Text_87_185}> Bonus $1.00 for 30 days</Text>
        </View>
        <View style={styles.View_87_186}>
          <Text style={styles.Text_87_186}> Bonus $1.50 for 30 days</Text>
        </View>
        <View style={styles.View_87_187}>
          <Text style={styles.Text_87_187}> Bonus $0.50 for 20 days</Text>
        </View>
      </View>
      <View style={styles.View_87_188}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5814/afcb/6d587a7e0ddc466bd1a612ff4d75b361"
          }}
          style={styles.TouchableOpacity_87_189}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_87_190}>
          <Text style={styles.Text_87_190}>Top up $15 was Successful</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4696/0773/b777ffe9dd902a12c1f3c33151303102"
          }}
          style={styles.ImageBackground_87_191}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_87_171: {
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
  View_87_172: {
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
  View_87_173: {
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
  View_87_174: {
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
  View_87_175: {
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
  View_87_176: {
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
  ImageBackground_87_177: {
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
  ImageBackground_87_178: {
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
  View_87_179: {
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
  Text_87_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_180: {
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
  Text_87_180: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_181: {
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
  Text_87_181: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_182: {
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
  Text_87_182: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_183: {
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
  Text_87_183: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_184: {
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
  Text_87_184: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_185: {
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
  Text_87_185: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_186: {
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
  Text_87_186: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_187: {
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
  Text_87_187: {
    color: "rgba(34, 37, 39, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_87_188: {
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
  TouchableOpacity_87_189: {
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
  View_87_190: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_87_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_87_191: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("21%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
