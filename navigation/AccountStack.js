// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../pages/MyAccount';
import NotificationsScreen from '../pages/MyAccount/Notifications';
import AddressBookScreen from '../pages/MyAccount/AddressBook';
import MyWishlistScreen from '../pages/MyAccount/MyWishlist';
import MyCartScreen from '../pages/MyAccount/MyCart';
import PendingOrdersScreen from '../pages/MyAccount/PendingOrder';
import InvoicesScreen from '../pages/MyAccount/Invoices';
import ReturnRequestScreen from '../pages/MyAccount/ReturnRequest';
import AccountStatementScreen from '../pages/MyAccount/AccountStatement';
import PaymentsScreen from '../pages/MyAccount/Payments';
import SupportScreen from '../pages/MyAccount/SupportAccount';
import PlumberRegistrationScreen from '../pages/MyAccount/PlumberRegistration';
import ServiceComplaintScreen from '../pages/MyAccount/servicesComplaint';
import AboutUsScreen from '../pages/MyAccount/aboutUS';
import NewServiceComplaintScreen from '../pages/MyAccount/NewServiceComplaint';
import NewPlumberRegistration from '../pages/MyAccount/NewPlumberRegistration';
import MakePayment from '../pages/MyAccount/MakePayment';
const AccountStack = createStackNavigator();

const AccountScreenNavigator = () => {
  return (
    <AccountStack.Navigator initialRouteName="AccountPage">
      <AccountStack.Screen
        name="AccountPage"
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
      <AccountStack.Screen
        name="MakePayment"
        component={MakePayment}
        options={{ headerShown: true,headerBackTitle:false,  title: 'MAKE PAYMENT', headerTintColor: 'black'}}
      />
        <AccountStack.Screen
        name="NotificationPage"
        component={NotificationsScreen}
        options={{headerShown: true,headerBackTitle:false,  title: 'NOTIFICATIONS', headerTintColor: 'black'}}
      />
        <AccountStack.Screen
        name="AddressBookScreen"
        component={AddressBookScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="MyWishlistScreen"
        component={MyWishlistScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="MyCartScreen"
        component={MyCartScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="PendingOrdersScreen"
        component={PendingOrdersScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="InvoicesScreen"
        component={InvoicesScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="ReturnRequestScreen"
        component={ReturnRequestScreen}
        options={{ headerShown: false }}
      />
        <AccountStack.Screen
        name="AccountStatementScreen"
        component={AccountStatementScreen}
        options={{ headerShown: false }}
      />
       <AccountStack.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{ headerShown: false }}
      />
       <AccountStack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ headerShown: false }}
      />
       <AccountStack.Screen
        name="PlumberRegistrationScreen"
        component={PlumberRegistrationScreen}
        options={{headerShown: true,headerBackTitle:false,  title: 'PLUMBER REGISTRATION', headerTintColor: 'black'}}
      />
       <AccountStack.Screen
        name="NewPlumberRegistration"
        component={NewPlumberRegistration}
        options={{ headerShown: true,headerBackTitle:false,  title: 'PLUMBER REGISTRATION', headerTintColor: 'black'}}
      />
       <AccountStack.Screen
        name="ServiceComplaintScreen"
        component={ServiceComplaintScreen}
        options={{ headerShown: true,headerBackTitle:false,  title: 'SERVICE COMPLAINT REGISTER', headerTintColor: 'black',headerTitleStyle: {
        fontSize: 16,

      },  }}
      />
       <AccountStack.Screen
        name="NewServiceComplaint"
        component={NewServiceComplaintScreen}
        options={{ headerShown: true,headerBackTitle:false,  title: 'SERVICE COMPLAINT REGISTER', headerTintColor: 'black',headerTitleStyle: {
        fontSize: 16,

      },  }}
      />
       <AccountStack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: true,headerBackTitle:false,  title: 'ABOUT US', headerTintColor: 'black' }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountScreenNavigator;
