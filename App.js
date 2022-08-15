import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Image,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!
import { Provider as PaperProvider, Appbar } from "react-native-paper";

// Reusable Styling Variables
const float = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
const rightAlign = { alignSelf: "flex-end" };
const bold = { fontWeight: "bold" };
const whiteBG = {
  backgroundColor: "#f0ffff",
  paddingTop: 15,
  paddingBottom: 15,
};
const whiteBG2 = { backgroundColor: "#f0ffff" };
const screenFlex = { flex: 1 };
const text = {
  paddingTop: Platform.OS === "web" ? 0 : 5,
  paddingLeft: Platform.OS === "web" ? 22 : 20,
  paddingRight: Platform.OS === "web" ? 25 : 20,
};
const text2 = {
  fontWeight: "bold",
  paddingLeft: Platform.OS === "web" ? 22 : 20,
  paddingRight: Platform.OS === "web" ? 25 : 20,
};
const textKey = {
  // color: "#808080",
  fontSize: 14,
  lineHeight: 1,
  paddingTop: 20,
  paddingLeft: 32,
  paddingBottom: 20,
};
const textValue = {
  // color: "#808080",
  fontSize: 14,
  lineHeight: 1,
  paddingTop: 20,
  paddingLeft: 10,
  paddingRight: 32,
  paddingBottom: 20,
};
const reimbursementImg = {
  width: 58, // this is the size that properly fits in the white bg
  height: 57, // this is the size that properly fits in the white bg
  borderRadius: 150 / 2,
  overflow: "hidden",
  borderWidth: 0.1, // subject to change
  borderColor: "black", // subject to change
};

// REACT-NATIVE FOR WEB ONLY
let darkScreen = false;

// Components
const Title = ({ title }) => {
  return <Text style={bold}>{title}</Text>;
};

const Reimbursement = (props) => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeSubContainerStyle =
    colorScheme === "light" ? styles.lightSubContainer : styles.darkSubContainer;
  const themeTextStyleWeb =
    props.darkMode ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyleWeb =
    props.darkMode ? styles.darkSubContainer : styles.lightSubContainer;

  return (
    <View style={float}>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Image
          source={require("./billdetailsimages/saki1.jpg")}
          style={reimbursementImg}
        />
      </View>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Text style={[text2, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{props.company}</Text>
        <Text style={[text, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{props.reimbursement}</Text>
        <Text style={[text, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{props.datetime}</Text>
      </View>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Text style={[text2, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{props.amount}</Text>
        <Text style={[text, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{props.status}</Text>
        <Text style={[text, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}> </Text>
      </View>
    </View>
  );
};

const ReimbursementDetails = (props) => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeSubContainerStyle =
    colorScheme === "light" ? styles.lightSubContainer : styles.darkSubContainer;
  const themeTextStyleWeb =
    props.darkMode ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyleWeb =
    props.darkMode ? styles.darkSubContainer : styles.lightSubContainer;

  return (
    <View style={float}>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Text></Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Transaction ID</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Total paid amount</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Transaction cost</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Discount</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Invoice ID</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Date and time</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Payment by</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>Description</Text>
      </View>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Text></Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
        <Text style={[textKey, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>:</Text>
      </View>
      <View style={Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle}>
        <Text></Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.transactionID}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.totalPaidAmount}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.transactionCost}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.discount}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.invoiceID}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.datetime}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.paymentBy}
        </Text>
        <Text style={[textValue, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
          {props.description}
        </Text>
      </View>
    </View>
  );
};

const Screen = () => {
  // For LIGHT MODE and DARK MODE
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const [darkMode, setDarkMode] = useState(true);
  const themeContainerStyleWeb =
    darkMode ? styles.darkContainer : styles.lightContainer;

  return (
    <View style={[screenFlex, Platform.OS === "web" ? themeContainerStyleWeb : themeContainerStyle]}>
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              alert("You love Saki Tenma!");
            }}
          />
          <Appbar.Content style={text} title="Bill Details" />
          <Appbar.Action icon={darkMode ? 'toggle-switch' : 'toggle-switch-off'} onPress={() => {
              setDarkMode(!darkMode);
            }} />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
      </View>
      <Text> </Text>
      <Reimbursement
        company="Company Name"
        reimbursement="Internet Bill"
        datetime="10 Jun 2020, 10:50 PM"
        amount="$210.00"
        status="Paid"
        darkMode={darkMode}
      />
      <Text> </Text>
      <ReimbursementDetails
        transactionID="1524200"
        totalPaidAmount="$200.00"
        transactionCost="-$10.00"
        discount="-$5.00"
        invoiceID="8808855"
        datetime="10 Jun, 10:30 PM"
        paymentBy="********601 (image)"
        description="Internet Bill"
        darkMode={darkMode}
      />
      <StatusBar />
    </View>
  );
};

// FOR LIGHT MODE AND DARK MODE
const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#f0f8ff",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightSubContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f0ffff",
  },
  darkSubContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#371f36",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});

export default Screen;
// import React from 'react';
// import { Text, StyleSheet, View, useColorScheme } from 'react-native';
// import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

// export default function App() {
//   const colorScheme = useColorScheme();

//   const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
//   const themeContainerStyle =
//     colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

//   return (
//     <View style={[styles.container, themeContainerStyle]}>
//       <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
//       <Text> {colorScheme} </Text>
//       <StatusBar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   lightContainer: {
//     backgroundColor: '#d0d0c0',
//   },
//   darkContainer: {
//     backgroundColor: '#242c40',
//   },
//   lightThemeText: {
//     color: '#242c40',
//   },
//   darkThemeText: {
//     color: '#d0d0c0',
//   },
// });
