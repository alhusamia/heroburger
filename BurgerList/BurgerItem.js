import React from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const BurgerItem = ({ burger, navigation }) => (
  <ImageBackground
    source={{
      uri: burger.image,
    }}
    style={styles.background}
  >
    <View style={styles.overlay} />
    <ListItem
      button
      style={styles.listitem}
      onPress={() => navigation.navigate("BurgerDetail", { burger })}
    >
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Left>
            <Thumbnail
              bordered
              source={{
                uri:
                  "https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg",
              }}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{burger.name}</Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  </ImageBackground>
);

export default BurgerItem;
