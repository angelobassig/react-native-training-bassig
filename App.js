import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Image,
  Platform,
  Touchable,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!
import { Provider as PaperProvider, Appbar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Reusable Styling Variables
const imgStyle = {
  width: 58, // this is the size that properly fits in the white bg
  height: 57, // this is the size that properly fits in the white bg
  borderRadius: 150 / 2,
  overflow: "hidden",
  // marginLeft: 30,
  borderWidth: 0.1, // subject to change
  borderColor: "black", // subject to change
  marginLeft: 10,
};
const float = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginBottom: 15,
};
const rightAlign = { alignSelf: "flex-end" };
const padding = {
  paddingLeft: 0,
  paddingRight: 10,
};

// Components
const ButtonReuse = ({ label, darkMode, onPress }) => {
  const colorScheme = useColorScheme();

  const buttonColor =
  colorScheme === "light" ? styles.lightThemeButton.color : styles.darkThemeButton.color;
  const buttonColorWeb =
  darkMode === true ? styles.darkThemeButton.color : styles.lightThemeButton.color;

  const buttonDark =
  colorScheme === "light" ? true : false;
  const buttonDarkWeb =
  darkMode === true ? true : false;

  return (
    <Button
      theme={styles.button}
      color={Platform.OS === "web" ? buttonColorWeb : buttonColor}
      dark={colorScheme === "light" ? buttonDarkWeb : buttonDark}
      mode="contained"
      uppercase={false}
      onPress={onPress}
    >
      {label}
    </Button>
  );
};

const TransactionsList = (props) => {
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
    <View>
      <FlatList
        data={[
          {
            image: props.image[0].src,
            type: "Taxi to NY",
            detail: "Transport",
            amount: 200.0,
          },
          {
            image: props.image[1].src,
            type: "Monthly Rent",
            detail: "Housing",
            amount: 200.0,
          },
          {
            image: props.image[2].src,
            type: "Bill Restaurant",
            detail: "Fun Life",
            amount: 200.0,
          },
          {
            image: props.image[3].src,
            type: "Flight Ticket",
            detail: "Travel",
            amount: 200.0,
          },
          {
            image: props.image[4].src,
            type: "Water Bill",
            detail: "Utility Bill",
            amount: 200.0,
          },
          {
            image: props.image[5].src,
            type: "Internet Bill",
            detail: "Utility Bill",
            amount: 200.0,
          },
          {
            image: props.image[6].src,
            type: "Interla Marla",
            detail: "AC 62502532025320",
            amount: 200.0,
          },
          {
            image: props.image[7].src,
            type: "Saki Tenma",
            detail: "Project Sekai",
            amount: 200.0,
          },
          {
            image: props.image[8].src,
            type: "Ichika Hoshino",
            detail: "Project Sekai 2",
            amount: 200.0,
          },
          {
            image: props.image[9].src,
            type: "Shiho Hinomori",
            detail: "Tondemo Wonderz",
            amount: 200.0,
          },
          {
            image: props.image[10].src,
            type: "Ichika Hoshino 2",
            detail: "Project Sekai 2",
            amount: 200.0,
          },
          {
            image: props.image[11].src,
            type: "Ichika Hoshino 3",
            detail: "Project Sekai 3",
            amount: 200.0,
          },
          {
            image: props.image[12].src,
            type: "Ichika Hoshino 4",
            detail: "Project Sekai 4",
            amount: 200.0,
          },
          {
            image: props.image[13].src,
            type: "Ichika Hoshino 5",
            detail: "Project Sekai 5",
            amount: 200.0,
          },
          {
            image: props.image[14].src,
            type: "Ichika Hoshino 6",
            detail: "Project Sekai 6",
            amount: 200.0,
          },
          {
            image: props.image[15].src,
            type: "Ichika Hoshino 7",
            detail: "Project Sekai 7",
            amount: 200.0,
          },
          {
            image: props.image[16].src,
            type: "Ichika Hoshino 8",
            detail: "Project Sekai 8",
            amount: 200.0,
          },
          {
            image: props.image[17].src,
            type: "Ichika Hoshino 9",
            detail: "Project Sekai 9",
            amount: 200.0,
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={float}>
              <View
                style={{ flex: 0.5}}
              ></View>
              <View style={[{ flex: 1, backgroundColor: '#f0ffff' }, Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle]}>
                <Image source={item.image} style={imgStyle} />
              </View>
              <View style={[{ flex: 2.3, backgroundColor: '#f0ffff' }, Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle]}>
                <Text style={[padding, styles.bold, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{item.type}</Text>
                <Text style={[padding, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>{item.detail}</Text>
              </View>
              <View style={[{ flex: 1, backgroundColor: '#f0ffff' }, Platform.OS === "web" ? themeContainerStyleWeb : themeSubContainerStyle]}>
                <Text style={[padding, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>- ${item.amount}</Text>
                <Text style={[padding, rightAlign, Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle]}>
                  <Icon
                    name="arrow-right-bold-circle"
                    size={25}
                    color="#A9A9A9"
                  />
                </Text>
              </View>
              <View
                style={{ flex: 0.5}}
              ></View>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 250 }}
      />
    </View>
  );
};

const TransactionHistory = () => {
  // For LIGHT MODE and DARK MODE
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const [darkMode, setDarkMode] = useState(true);
  const themeContainerStyleWeb =
    darkMode ? styles.darkContainer : styles.lightContainer;

  const [images, setImages] = useState([
    { src: require("./staticimages/saki1.jpg") },
    { src: require("./staticimages/saki2.jpg") },
    { src: require("./staticimages/saki3.jpg") },
    { src: require("./staticimages/saki4.jpg") },
    { src: require("./staticimages/saki5.jpg") },
    { src: require("./staticimages/saki4.jpg") },
    { src: require("./staticimages/saki3.jpg") },
    { src: require("./staticimages/saki2.jpg") },
    { src: require("./staticimages/saki1.jpg") },
    { src: require("./staticimages/saki1.jpg") },
    { src: require("./staticimages/saki2.jpg") },
    { src: require("./staticimages/saki3.jpg") },
    { src: require("./staticimages/saki4.jpg") },
    { src: require("./staticimages/saki5.jpg") },
    { src: require("./staticimages/saki4.jpg") },
    { src: require("./staticimages/saki3.jpg") },
    { src: require("./staticimages/saki2.jpg") },
    { src: require("./staticimages/saki1.jpg") },
  ]);

  // WEB-ONLY ICON
  const toggler = <Appbar.Action icon={darkMode ? 'toggle-switch' : 'toggle-switch-off'} onPress={() => {
    setDarkMode(!darkMode);
  }} />

  return (
    <View style={[{ flex: 1 }, Platform.OS === "web" ? themeContainerStyleWeb : themeContainerStyle]}>
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              alert("You love Saki Tenma!");
            }}
          />
          <Appbar.Content title="Transaction History" style={{alignItems: 'center'}} />
          {Platform.OS === "web" ? toggler : <Text></Text>}
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
      </View>
      <View style={styles.view}>
        <View style={styles.buttonContainer}>
          <ButtonReuse label="Spend Money" darkMode={darkMode} onPress={() => {alert('Spend Money Pressed')}} />
        </View>
        <View>
          <ButtonReuse label="Received Fund" darkMode={darkMode} onPress={() => {alert('Received Fund Pressed')}} />
        </View>
      </View>
      <TransactionsList image={images} darkMode={darkMode} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    roundness: 20,
  },
  lightThemeButton: {
    color: "#FFA500"
  },
  darkThemeButton: {
    color: "#1E90FF"
  },
  view: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 20,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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

export default TransactionHistory;