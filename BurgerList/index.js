import React from "react";
import { List, Content } from "native-base";
import { connect } from "react-redux";

// Component
import BurgerItem from "./BurgerItem";

const BurgerList = ({ burgers, navigation }) => {
  const burgerList = burgers.map((burger) => (
    <BurgerItem burger={burger} key={burger.name} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{burgerList}</List>
    </Content>
  );
};

const mapStateToProps = ({ burgers }) => ({
  burgers,
});

export default connect(mapStateToProps)(BurgerList);
