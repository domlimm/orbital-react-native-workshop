// Arrow Functions
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;

// Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(1, 2, 3, 4, 5);

// x = 15

// Spread Operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]; // [1, 2, 3, 4, 5, 6]

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

Object {
    brand: 'Ford';
    color: 'yellow';
    model: 'Mustang';
    type: 'car';
    year: 2021;
}

// Destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles; // car = 'mustang', suv = 'expedition'

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

// Output: My car is a red Ford Mustang.

// Class Component
class SignInScreen extends React.Component {
    handleSignIn = () => {
        checkValidUserName()
        checkValidPassword()
        signIn()
    }
    render() {
        return (
            <View>
               <TextInput placeholder="Username" />
                <TextInput placeholder="Password" />
                <Button onPress={this.handleSignIn} title="Sign In" />
            </View>
        )
    }
}

// Functional Component ES6
const SignInScreen = () => {
    const handleSignIn = () => {
        checkValidUserName()
        checkValidPassword()
        signIn()
    }
    return (
        <View>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Button onPress={handleSignIn} title="Sign In" />
        </View>
    )
}

// Functional Component ES5
function SignInScreen() {
    function handleSignIn() {
        checkValidUserName()
        checkValidPassword()
        signIn()
    }
    return (
        <View>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Button onPress={handleSignIn} title="Sign In" />
        </View>
    )
}

// Exercise 0 Solution
export default App = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

// Text component
<Text>Hello World!</Text>

let name = "again";
<Text>{"Hello World " + name}</Text>

// App Control
const Component = () => (
    <Text>Text1</Text>
    <Text>Text2</Text>
    <Text>Text3</Text>
);

const Component = () => (
    <>
        <Text>Text1</Text>
        <Text>Text2</Text>
        <Text>Text3</Text>
    </>
);

const Component = () => (
    <View>
        <Text>Text1</Text>
        <Text>Text2</Text>
        <Text>Text3</Text>
    </View>
);

// Props
const CallerComponent = () => {
    return (
        <View>
            <CalleeComponent phrase="Hello World!" />
        </View>
    )
};

const CalleeComponent = ({ phrase }) => <Text>{phrase}</Text>;

const CalleeComponent2 = (props) => <Text>{props.phrase}</Text>;

class CalleeComponent extends React.Component {
    render() {
        const { phrase } = this.props;

        return (
            <Text>{phrase}</Text>
        );
    };
};

const ParentComponent = () => {
    return (
        <View>
            <SubComponent>Hello World!</SubComponent>
        </View>
    );
};

const SubComponent = (props) => {
    const { children } = props;

    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

// Styling
const StylingComponent = (props) => {
    const { children } = props;

    return (
        <View style={[styles.container, { borderWidth: 1 }]}>
            <View style={{
                backgroundColor: 'blue',
                height: 50,
                width: 50 }}
            >
                <Text>{children}</Text>
            </View>
            <View style={styles.redBox}>
                <Text>{children}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'black'
    },
    redBox: {
        backgroundColor: 'red',
        width: 50,
        height: 50
    }
});

// Flexbox
const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
});

// Exercise 1 - Bad
const Counter = () => {
    const count = 0;

    return (
        <View>
            <Text>{count}</Text>
            <Button onPress={() => count++} title='Increment' />
            <Button onPress={() => count--} title='Decrement' />
        </View>
    );
};

export default Counter;

// Exercise 1 - Good
const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <View>
            <Text>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title='Increment' />
            <Button onPress={() => setCount(count - 1)} title='Decrement' />
        </View>
    );
};

export default Counter;

// Exercise 1 - Class Component Solution
class Counter extends React.Component {
    // Initialize count to 0
    state = {
        count: 0
    };

    // Use setState to update state
    incrementCount = () => this.setState({ count: this.state.count + 1 });
    decrementCount = () => this.setState({ count: this.state.count - 1 });

    render() {
        // Access count state with this.state
        const { count } = this.state;

        return (
            <View>
                <Text>{count}</Text>
                <Button onPress={incrementCount} title='Increment' />
                <Button onPress={decrementCount} title='Decrement' />
            </View>
        )
    }
}

export default Counter;

// TextInput
const TextInputDemo = () => {
    const [text, setText] = useState('Hello');

    return (
        <TextInput value={text} onChangeText={text => setText(text)} />
    )
};

// 
// First Approach
const LocalImageDemo = () => <Image source={require('assets/images/react.png')} />

const RemoteImageDemo = () => (
    <Image
        style={{ height: 300, width: 300 }}
        source={{ uri: 'https://www.nus.edu.sg/images/default-source/base/logo.png' }}
    />
)

import localImage from 'assets/images/react.png'

const LocalImageDemo = () => {
    return (
        <Image source={localImage} />
    );
};

// Notches
import React, { useState } from 'react';
import { Text, SafeAreaView, Button, StatusBar, Platform } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const paddingValue = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    return (
        <SafeAreaView style={{ paddingTop: paddingValue }}>
            <Text>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title='Increment' />
            <Button onPress={() => setCount(count - 1)} title='Decrement' />
        </SafeAreaView>
    )
}

export default Counter;

// FlatList
const CLASS_LIST = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Candice' },
];

const Item = ({ title }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log(title)}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const FlatListDemo = () => (
    <View style={styles.container}>
        <FlatList
            data={CLASS_LIST}
            renderItem={({ item }) => <Item title={item.name} />}
            keyExtractor={item => item.id}
        />
    </View>
);

export default FlatListDemo;

// Ternary
const MainScreen = props => {
    const { isAdmin } = props;

    return (
        <View>
            {isAdmin ? <AdminScreen /> : <HomeScreen />}
        </View>
    );
};

// Logical && op
const MailBox = props => {
    const { unreadMessages } = props;

    return (
        <View>
            <Text>Hello!</Text>
            {unreadMessages.length > 0 &&
                <Text>
                    You have {unreadMessages.length} unread messages.
                </Text>
            }
        </View>
    );
};

// If-else
const MainScreen = props => {
    const { isAuth } = props;

    if (isAuth) {
        return <HomeScreen />;
    } else {
        return <LoginScreen />;
    }
};

public int getBalance(int userId) {
    // This code block is complicated, needs some comments
    if (...) {
        ...
    }
}
