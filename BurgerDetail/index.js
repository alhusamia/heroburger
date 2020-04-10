import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Image,
  Left,
} from "native-base";

export default function index(props) {
  const { burger } = props.route.params;
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>{burger.name}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              {/* <Image
                source={{ uri: burger.image }}
                style={{ height: 200, width: null, flex: 1 }}
              /> */}
              <Text>{burger.description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text>{burger.price} JD</Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
