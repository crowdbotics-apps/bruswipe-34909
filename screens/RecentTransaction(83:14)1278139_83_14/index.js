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
      <View style={styles.View_83_15}>
        <View style={styles.View_83_16} />
        <View style={styles.View_83_17} />
        <TouchableOpacity
          style={styles.TouchableOpacity_83_18}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_83_19} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68bf/c4d4/f43151be24cc577fad79606a256a3225"
          }}
          style={styles.ImageBackground_83_20}
        />
        <View style={styles.View_83_21}>
          <Text style={styles.Text_83_21}>Total asset</Text>
        </View>
        <View style={styles.View_83_22}>
          <Text style={styles.Text_83_22}>BND $0.00</Text>
        </View>
        <View style={styles.View_83_23}>
          <Text style={styles.Text_83_23}>Transaction History</Text>
        </View>
        <View style={styles.View_83_24}>
          <Text style={styles.Text_83_24}>LogOut</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98e0/75c3/7c2c42ba2b81616612af09aa4ebce858"
          }}
          style={styles.ImageBackground_83_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68d/5724/0fb7b6466735e0ba4dacb60729142ea3"
          }}
          style={styles.ImageBackground_83_26}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd88/10a4/1d2bfcc0c385e9f41c77c7c2b04503f7"
          }}
          style={styles.TouchableOpacity_83_27}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a349/1ae3/6d72c073c32844c70a97a33199ef152f"
          }}
          style={styles.ImageBackground_83_28}
        />
        <View style={styles.View_83_29}>
          <Text style={styles.Text_83_29}>BruSwipe</Text>
        </View>
        <View style={styles.View_83_30}>
          <Text style={styles.Text_83_30}>Top up</Text>
        </View>
        <View style={styles.View_83_31}>
          <Text style={styles.Text_83_31}>Transfer</Text>
        </View>
        <View style={styles.View_83_32}>
          <Text style={styles.Text_83_32}>Reward Point</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea5/1e16/ae205060288d9c8f4d333fdae3f58956"
          }}
          style={styles.TouchableOpacity_83_33}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_49"))
          }
        />
        <View style={styles.View_83_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c78c/13e2/1b64c5ef497eaf893dc86020deb63d02"
            }}
            style={styles.ImageBackground_83_35}
          />
        </View>
        <View style={styles.View_83_38}>
          <Text style={styles.Text_83_38}>Welcome</Text>
        </View>
      </View>
      <View style={styles.View_83_13}>
        <View style={styles.View_38_50} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99da/8111/0a49ff98d9121938b4fb58bcab3283ee"
          }}
          style={styles.ImageBackground_38_52}
        />
        <View style={styles.View_38_53} />
        <View style={styles.View_38_72} />
        <View style={styles.View_38_77} />
        <View style={styles.View_38_82} />
        <View style={styles.View_38_54} />
        <View style={styles.View_38_73} />
        <View style={styles.View_38_78} />
        <View style={styles.View_38_83} />
        <View style={styles.View_38_56}>
          <Text style={styles.Text_38_56}>20 Jul 2019</Text>
        </View>
        <View style={styles.View_38_74}>
          <Text style={styles.Text_38_74}>10 May 2019</Text>
        </View>
        <View style={styles.View_38_79}>
          <Text style={styles.Text_38_79}>9 April 2019</Text>
        </View>
        <View style={styles.View_38_84}>
          <Text style={styles.Text_38_84}>2 April 2019</Text>
        </View>
        <View style={styles.View_38_55}>
          <Text style={styles.Text_38_55}>Topup</Text>
        </View>
        <View style={styles.View_38_75}>
          <Text style={styles.Text_38_75}>Transfer</Text>
        </View>
        <View style={styles.View_38_80}>
          <Text style={styles.Text_38_80}>Topup</Text>
        </View>
        <View style={styles.View_38_85}>
          <Text style={styles.Text_38_85}>Topup</Text>
        </View>
        <View style={styles.View_38_57}>
          <Text style={styles.Text_38_57}>-$10.00</Text>
        </View>
        <View style={styles.View_38_76}>
          <Text style={styles.Text_38_76}>-$20.00</Text>
        </View>
        <View style={styles.View_38_81}>
          <Text style={styles.Text_38_81}>-$15.00</Text>
        </View>
        <View style={styles.View_38_86}>
          <Text style={styles.Text_38_86}>-$10.00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea5/1e16/ae205060288d9c8f4d333fdae3f58956"
          }}
          style={styles.ImageBackground_38_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea5/1e16/ae205060288d9c8f4d333fdae3f58956"
          }}
          style={styles.ImageBackground_38_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea5/1e16/ae205060288d9c8f4d333fdae3f58956"
          }}
          style={styles.ImageBackground_38_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a349/1ae3/6d72c073c32844c70a97a33199ef152f"
          }}
          style={styles.ImageBackground_38_88}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad30/1aaa/9404cee36472e1e7b943882c4d98fd72"
          }}
          style={styles.TouchableOpacity_87_299}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("4_7"))
          }
        />
        <View style={styles.View_38_51}>
          <Text style={styles.Text_38_51}>Recently Transaction</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_83_15: {
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
  View_83_16: {
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
  View_83_17: {
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
  TouchableOpacity_83_18: {
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
  View_83_19: {
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
  ImageBackground_83_20: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_83_21: {
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
  Text_83_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_22: {
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
  Text_83_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_23: {
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
  Text_83_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_24: {
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
  Text_83_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_83_25: {
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
  ImageBackground_83_26: {
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
  TouchableOpacity_83_27: {
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
  ImageBackground_83_28: {
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
  View_83_29: {
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
  Text_83_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_30: {
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
  Text_83_30: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_31: {
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
  Text_83_31: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_32: {
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
  Text_83_32: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_83_33: {
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
  View_83_34: {
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
  ImageBackground_83_35: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_83_38: {
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
  Text_83_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_38_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 249, 246, 1)"
  },
  ImageBackground_38_52: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%")
  },
  View_38_53: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%"),
    backgroundColor: "rgba(63, 223, 214, 1)",
    opacity: 0.6200000047683716
  },
  View_38_72: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    backgroundColor: "rgba(63, 223, 214, 1)",
    opacity: 0.6200000047683716
  },
  View_38_77: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("47%"),
    backgroundColor: "rgba(63, 223, 214, 1)",
    opacity: 0.6200000047683716
  },
  View_38_82: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("64%"),
    backgroundColor: "rgba(63, 223, 214, 1)",
    opacity: 0.6200000047683716
  },
  View_38_54: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(58, 210, 202, 1)",
    opacity: 0.7200000286102295
  },
  View_38_73: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(58, 210, 202, 1)",
    opacity: 0.7200000286102295
  },
  View_38_78: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(58, 210, 202, 1)",
    opacity: 0.7200000286102295
  },
  View_38_83: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(58, 210, 202, 1)",
    opacity: 0.7200000286102295
  },
  View_38_56: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_38_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_74: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_38_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_79: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_38_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_84: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_38_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_55: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_38_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_75: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_38_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_80: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_38_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_85: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_38_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_57: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_38_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_76: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_38_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_81: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_38_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_86: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_38_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_87: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("17%")
  },
  ImageBackground_38_89: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("68%")
  },
  ImageBackground_38_91: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("51%")
  },
  ImageBackground_38_88: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("33%")
  },
  TouchableOpacity_87_299: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_38_51: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_38_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
