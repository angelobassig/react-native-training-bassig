import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Platform,
  FlatList,
  Animated,
} from "react-native";
import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Intro = ({ darkMode }) => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeSubContainerStyle =
    colorScheme === "light"
      ? styles.lightSubContainer
      : styles.darkSubContainer;
  const themeTextStyleWeb = darkMode
    ? styles.darkThemeText
    : styles.lightThemeText;
  const themeSubContainerStyleWeb = darkMode
    ? styles.darkSubContainer
    : styles.lightSubContainer;

  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 20,
      }}
    >
      <View style={styles.floatNoMargin}>
        <View style={{ flex: 1 }}></View>
        <View
          style={[
            { flex: 5 },
            Platform.OS === "web"
              ? themeSubContainerStyleWeb
              : themeSubContainerStyle,
          ]}
        >
          <Text
            style={[
              styles.padding,
              styles.heading,
              Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
            ]}
          >
            How it work
          </Text>
        </View>
        <View
          style={[
            { flex: 1 },
            Platform.OS === "web"
              ? themeSubContainerStyleWeb
              : themeSubContainerStyle,
          ]}
        >
          <Text
            style={[
              {
                alignSelf: "flex-end",
              },
              styles.paddingIcon,
            ]}
          >
            <Icon name="checkbox-marked-circle" size={25} color="#A9A9A9" />
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <View style={styles.float}>
        <View style={{ flex: 1 }}></View>
        <View
          style={[
            { flex: 6, paddingBottom: 10 },
            Platform.OS === "web"
              ? themeSubContainerStyleWeb
              : themeSubContainerStyle,
          ]}
        >
          <Text
            style={[
              styles.padding,
              Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
            ]}
          >
            Lorem ipsum, or limpsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
};

const FaqList = ({ darkMode }) => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeSubContainerStyle =
    colorScheme === "light"
      ? styles.lightSubContainer
      : styles.darkSubContainer;
  const themeTextStyleWeb = darkMode
    ? styles.darkThemeText
    : styles.lightThemeText;
  const themeSubContainerStyleWeb = darkMode
    ? styles.darkSubContainer
    : styles.lightSubContainer;

  const [isFirstIconPressed, setIsFirstIconPressed] = useState(false);
  const [isSecondIconPressed, setIsSecondIconPressed] = useState(false);
  const [isThirdIconPressed, setIsThirdIconPressed] = useState(false);
  const [isFourthIconPressed, setIsFourthIconPressed] = useState(false);
  const [isFifthIconPressed, setIsFifthIconPressed] = useState(false);
  const [isSixthIconPressed, setIsSixthIconPressed] = useState(false);

  return (
    <View>
      <FlatList
        data={[
          {
            key: "How to use From This App ?",
            text: "You pressed the first button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsFirstIconPressed(!isFirstIconPressed);
                }}
              />
            ),
            bool: isFirstIconPressed,
          },
          {
            key: "How to Edit Profile ?",
            text: "You pressed the second button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsSecondIconPressed(!isSecondIconPressed);
                }}
              />
            ),
            bool: isSecondIconPressed,
          },
          {
            key: "What does Lorem Ipsum mean?",
            text: "You pressed the third button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsThirdIconPressed(!isThirdIconPressed);
                }}
              />
            ),
            bool: isThirdIconPressed,
          },
          {
            key: "What is dummy text?",
            text: "You pressed the fourth button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsFourthIconPressed(!isFourthIconPressed);
                }}
              />
            ),
            bool: isFourthIconPressed,
          },
          {
            key: "Who invented Lorem ipsum?",
            text: "You pressed the fifth button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsFifthIconPressed(!isFifthIconPressed);
                }}
              />
            ),
            bool: isFifthIconPressed,
          },
          {
            key: "Why do we use Lorem ipsum?",
            text: "You pressed the sixth button",
            icon: (
              <Icon
                name="chevron-right-circle"
                size={25}
                color="#A9A9A9"
                onPress={() => {
                  setIsSixthIconPressed(!isSixthIconPressed);
                }}
              />
            ),
            bool: isSixthIconPressed,
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.float}>
              <View style={{ flex: 1 }}></View>
              <View
                style={[
                  { flex: 5 },
                  Platform.OS === "web"
                    ? themeSubContainerStyleWeb
                    : themeSubContainerStyle,
                ]}
              >
                <Text
                  style={[
                    styles.padding,
                    styles.heading,
                    Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
                  ]}
                >
                  {item.key}
                </Text>

                {item.bool === true ? (
                  <FadeInView>
                    <Text
                      style={[
                        styles.padding,
                        Platform.OS === "web"
                          ? themeTextStyleWeb
                          : themeTextStyle,
                      ]}
                    >
                      {item.text}
                    </Text>
                  </FadeInView>
                ) : (
                  <Text></Text>
                )}
              </View>
              <View
                style={[
                  { flex: 1 },
                  Platform.OS === "web"
                    ? themeSubContainerStyleWeb
                    : themeSubContainerStyle,
                ]}
              >
                <Text
                  style={[
                    {
                      alignSelf: "flex-end",
                    },
                    styles.paddingIcon,
                  ]}
                >
                  {item.icon}
                </Text>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 350 }}
      />
    </View>
  );
};

const App = () => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const [darkMode, setDarkMode] = useState(true);
  const themeContainerStyleWeb = darkMode
    ? styles.darkContainer
    : styles.lightContainer;

  // WEB-ONLY ICON
  const toggler = (
    <Appbar.Action
      icon={darkMode ? "toggle-switch" : "toggle-switch-off"}
      onPress={() => {
        setDarkMode(!darkMode);
      }}
    />
  );

  return (
    <View
      style={[
        { flex: 1 },
        Platform.OS === "web" ? themeContainerStyleWeb : themeContainerStyle,
      ]}
    >
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            alert("You love Saki Tenma!");
          }}
        />
        <Appbar.Content title="How it work" style={{ alignItems: "center" }} />
        {Platform.OS === "web" ? toggler : <Text></Text>}
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <Intro darkMode={darkMode} />
      <FaqList darkMode={darkMode} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  float: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  floatNoMargin: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 20,
  },
  padding: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
  },
  paddingIcon: {
    paddingTop: 20,
    paddingRight: 10,
  },
  lightContainer: {
    backgroundColor: "#f0f8ff",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightSubContainer: {
    backgroundColor: "#f0ffff",
  },
  darkSubContainer: {
    backgroundColor: "#371f36",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});

// ANIMATION
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
