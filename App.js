import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Platform,
  FlatList,
  Animated,
  ScrollView,
} from "react-native";
import { Appbar, Searchbar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Question = ({ placeholder, darkMode }) => {
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
    <View style={styles.float}>
      <View style={{ flex: 0.5 }}></View>
      <View
        style={{ flex: 3, marginTop: 20 }}
      >
        <Text
          style={[
            Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
            { fontSize: 26, fontWeight: "bold", color: "#A9A9A9" },
          ]}
        >
          {placeholder}
        </Text>
      </View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

const SearchBar = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

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
    <View style={styles.float}>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 3 }}>
        <Searchbar
          style={
            Platform.OS === "web"
              ? themeSubContainerStyleWeb
              : themeSubContainerStyle
          }
          inputStyle={
            Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle
          }
          theme={{ roundness: 20 }}
          placeholder="Search"
          placeholderTextColor={
            Platform.OS === "web"
              ? themeTextStyleWeb.color
              : themeTextStyle.color
          }
          iconColor={
            Platform.OS === "web"
              ? themeTextStyleWeb.color
              : themeTextStyle.color
          }
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

const FrequentlyAsked = ({ darkMode }) => {
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
    <View style={styles.float}>
      <View style={{ flex: 0.25 }}></View>
      <View style={{ flex: 1.75 }}>
        <Text
          style={[
            Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
            { fontSize: 22, fontWeight: "bold" },
          ]}
        >
          Frequently Asked
        </Text>
      </View>
      <View style={{ flex: 1.75}}>
        <Text
          style={[
            Platform.OS === "web" ? themeTextStyleWeb : themeTextStyle,
            { fontSize: 16, alignSelf: "flex-end", color: "blue" },
          ]}
        >
          View All
        </Text>
      </View>
      <View style={{ flex: 0.25 }}></View>
    </View>
  );
};

const QuestionsList = ({ darkMode }) => {
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
    <View style={styles.float}>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={[
            {
              question: "How do I create a Epay account ?",
              answer:
                "You can create a Epay account by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            // {
            //   question: "How to create a card for epay?",
            //   answer:
            //     "You can create a card for epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            // },
            // {
            //   question: "How to Top Up on epay?",
            //   answer:
            //     "You can Top Up on epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            // },
          ]}
          renderItem={({ item }) => {
            return (
              <View>
                <View></View>
                <View
                  style={[
                    Platform.OS === "web"
                      ? themeSubContainerStyleWeb
                      : themeSubContainerStyle,
                    styles.itemContainer
                  ]}
                >
                  <Text
                    style={[
                      Platform.OS === "web"
                        ? themeTextStyleWeb
                        : themeTextStyle,
                      styles.question,
                    ]}
                  >
                    {item.question}
                  </Text>
                  <Text
                    style={[
                      Platform.OS === "web"
                        ? themeTextStyleWeb
                        : themeTextStyle,
                      styles.answer,
                    ]}
                  >
                    {item.answer}
                  </Text>
                </View>
                <View></View>
              </View>
            );
          }}
          contentContainerStyle={{ paddingBottom: 0 }}
        />
      </View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

const ButtonReuse = ({ label, darkMode }) => {
  const colorScheme = useColorScheme();

  const buttonColor =
    colorScheme === "light"
      ? styles.lightThemeButton.color
      : styles.darkThemeButton.color;
  const buttonColorWeb =
    darkMode === true
      ? styles.darkThemeButton.color
      : styles.lightThemeButton.color;

  const [loadMore, setLoadMore] = useState(false);

  return (
    <View>
      <View style={styles.float}>
        <View
          style={{ flex: 0.25 }}
        ></View>
        <View style={{ flex: 3.5 }}>
          <Button
            contentStyle={{ height: 40 }}
            theme={{ roundness: 20 }}
            color={Platform.OS === "web" ? buttonColorWeb : buttonColor}
            dark={true}
            mode="contained"
            uppercase={false}
            onPress={() => {
              setLoadMore(!loadMore);
            }}
          >
            {loadMore === true ? "Show Less" : label}
          </Button>
        </View>
        <View
          style={{ flex: 0.25 }}
        ></View>
      </View>
      <View>
        {loadMore === true ? (
          <QuestionsList2 darkMode={darkMode} />
        ) : (
          <Text></Text>
        )}
      </View>
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
        <Appbar.Content title="FAQ" style={{ alignItems: "center" }} />
        {Platform.OS === "web" ? toggler : <Text></Text>}
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <Question placeholder={"You have any question ?"} darkMode={darkMode} />
      <SearchBar darkMode={darkMode} />
      <FrequentlyAsked darkMode={darkMode} />
      <QuestionsList darkMode={darkMode} />
      <ButtonReuse label="Load more" darkMode={darkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  float: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  question: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  answer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    fontSize: 14,
    paddingBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
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
  lightThemeButton: {
    color: "skyblue",
  },
  darkThemeButton: {
    color: "#FFA500",
  },
});

const QuestionsList2 = ({ darkMode }) => {
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
    <View style={styles.float}>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={[
            // {
            //   question: "How do I create a Epay account ?",
            //   answer:
            //     "You can create a Epay account by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            // },
            {
              question: "How to create a card for epay?",
              answer:
                "You can create a card for epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How to Top Up on epay?",
              answer:
                "You can Top Up on epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How do I create a Epay account 2?",
              answer:
                "You can create a Epay account 2 by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How do I create a Epay account ?",
              answer:
                "You can create a Epay account by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How to create a card for epay?",
              answer:
                "You can create a card for epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How to Top Up on epay?",
              answer:
                "You can Top Up on epay by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
            {
              question: "How do I create a Epay account 2?",
              answer:
                "You can create a Epay account 2 by going to the website and clicking on sign-up and you will receive a confirmation email after doing that",
            },
          ]}
          renderItem={({ item }) => {
            return (
              <View>
                <View></View>
                <FadeInView
                  style={[
                    Platform.OS === "web"
                      ? themeSubContainerStyleWeb
                      : themeSubContainerStyle,
                    styles.itemContainer
                  ]}
                >
                  <Text
                    style={[
                      Platform.OS === "web"
                        ? themeTextStyleWeb
                        : themeTextStyle,
                      styles.question,
                    ]}
                  >
                    {item.question}
                  </Text>
                  <Text
                    style={[
                      Platform.OS === "web"
                        ? themeTextStyleWeb
                        : themeTextStyle,
                      styles.answer,
                    ]}
                  >
                    {item.answer}
                  </Text>
                </FadeInView>
                <View></View>
              </View>
            );
          }}
          contentContainerStyle={{ paddingBottom: 750 }}
        />
      </View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

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
      style={[
        props.style,
        {
          opacity: fadeAnim, // Bind opacity to animated value
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default App;
