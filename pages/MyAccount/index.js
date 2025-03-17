import React from "react";
import {  View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView,  SafeAreaView,Image } from "react-native";
import AccountHeader from "../../components/AccountHeader";
import Icon from "react-native-vector-icons/FontAwesome";

const MenuItem = ({ name, icon, screen, navigation }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(screen)}>
      {/* <Icon name={icon} size={20} color="#000" style={styles.menuIcon} /> */}
    <Image source={icon} style={styles.menuIcon}/>
      <Text style={styles.menuText}>{name}</Text>
      {/* <Icon name={"angle-right"} size={28} color="#000" style={styles.menuIcon} /> */}

    </TouchableOpacity>
  );
const MyAccountScreen = ({navigation}) => {
    
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Black Background for Status Bar & Header */}
      <View style={styles.blackBackground}>
        <AccountHeader />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
  
      <View style={styles.dashboardContainer}>
          <Text style={styles.dashboardTitle}>Dashboard</Text>
          <View style={styles.paymentCard}>
            <Text style={styles.totalPayable}>Total Payable</Text>
            <Text style={styles.totalAmount}>₹ 3,00,000</Text>
            <View style={styles.dashboardRow}>
              <Text style={styles.currentText}>Current
                {"\n"}₹ 1,50,000
              </Text>
              <Text style={styles.overdueText}>Overdue
                {"\n"}₹ 1,50,000
              </Text>
            </View>
            <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate("PaymentsScreen")}>
  <Text style={styles.paymentButtonText}>Make Payment</Text>
</TouchableOpacity>
          </View>
      </View>
            <View style={styles.menusContainer}>
                <Text style={styles.dashboardTitle}>Manage Your Business</Text>
        <MenuItem name="Notifications" icon={require("../../assets/icons/Notification Light.png")} screen="NotificationPage" navigation={navigation} />
        <MenuItem name="Address Book" icon={require("../../assets/icons/Address Book Light.png")} screen="AddressBookScreen" navigation={navigation} />
        <MenuItem name="My Wishlist"icon={require("../../assets/icons/My Wishlist.png")} screen="MyWishlistScreen" navigation={navigation} />
        <MenuItem name="My Cart" icon={require("../../assets/icons/My Cart.png")} screen="MyCartScreen" navigation={navigation} />
        <MenuItem name="Pending Orders" icon={require("../../assets/icons/Pending Order.png")} screen="PendingOrdersScreen" navigation={navigation} />
        <MenuItem name="Invoices" icon={require("../../assets/icons/Invoice.png")} screen="InvoicesScreen" navigation={navigation} />
        <MenuItem name="Return Request" icon={require("../../assets/icons/Request Return.png")} screen="ReturnRequestScreen" navigation={navigation} />
        <MenuItem name="Account Statement" icon={require("../../assets/icons/Account Statement.png")} screen="AccountStatementScreen" navigation={navigation} />
        <MenuItem name="Payments" icon={require("../../assets/icons/Payments.png")} screen="PaymentsScreen" navigation={navigation} />
        <MenuItem name="Support Account" icon={require("../../assets/icons/Support Account.png")} screen="PaymentsScreen" navigation={navigation} />
        <MenuItem name="Plumber Registration" icon={require("../../assets/icons/Plumber Registration.png")} screen="PlumberRegistrationScreen" navigation={navigation} />
        <MenuItem name="Service Complaint Registration" icon={require("../../assets/icons/Slider Image 2.png")} screen="ServiceComplaintScreen" navigation={navigation} />
        <MenuItem name="Share The App"icon={require("../../assets/icons/Share Dark.png")} screen="ShareAppScreen" navigation={navigation} />
        <MenuItem name="About Us" icon={require("../../assets/icons/About Us.png")} screen="AboutUsScreen" navigation={navigation} />

            </View>
        </ScrollView>
       </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black", // Make SafeArea black to cover status bar
  },
  blackBackground: {
    backgroundColor: "black", // Ensure black background before header
  },
  content: {
    flex: 1,
    backgroundColor: "#E2E5E3", // Main screen background
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#000",
    padding: 15,
    paddingTop: 50,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  companyDetails: {
    fontSize: 12,
    color: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  dashboardContainer: {
    padding: 10,
    borderRadius:5
  },
  dashboardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:5
  },
  paymentCard: {
    backgroundColor: "#f0f0f0",

    borderRadius: 5,
    alignItems: "center",
  },
  totalPayable: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop:5
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  dashboardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderColor:"grey",
    borderTopWidth:1
  },
  currentText: {
    color: "green",
    fontSize: 14,
    textAlign: "center",
    flex: 1,
    borderRightWidth:1,
    borderColor:"grey",

    paddingVertical:10
  },
  overdueText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    flex: 1,
    paddingVertical:10
  },
  paymentButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  menusContainer:{
    padding:10,

  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius:5,
    // borderColor: "#ddd",
    backgroundColor:"white",
    marginBottom:10
  },
  menuIcon: {
    marginRight: 15,
    height:40,width:40,
    resizeMode:"contain"
  },
  menuText: {
    fontSize: 16,
  },
});

export default MyAccountScreen;
