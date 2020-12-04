import React from 'react';
import {
  View
} from 'react-native';
import { Button} from 'react-native-elements'

class ReviewDetails extends React.Component {

  render() {

    const pressHandler = () => {
        this.props.navigation.goBack()
    }

    return (
      <View options={{ headerShown: false }}>
            <Text>{this.props.navigation.getParam('hdurl')}</Text>
            <Text>{this.props.navigation.getParam('copyright')}</Text>
            <Text>{this.props.navigation.getParam('explanation')}</Text>
            <Button
                title='Back to home' 
                onPress={pressHandler}/>
      </View>
    );
  }
}

export default ReviewDetails