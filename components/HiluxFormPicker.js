import React from "react";
import { Text, Switch as RNSwitch } from "react-native";
import { withFormikControl } from "react-native-formik";
 
class Switch extends React.PureComponent {
  render() {
    const { error, value, setFieldValue, label } = this.props;
 
    return (
      <React.Fragment>
        <RNSwitch
          value={value}
          ios_backgroundColor={error ? "red" : "transparent"}
          onValueChange={setFieldValue}
        />
        <Text>{label}</Text>
      </React.Fragment>
    );
  }
}
 
export default withFormikControl(Switch);