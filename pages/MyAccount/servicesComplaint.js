import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceComplaintScreen = () => {
  const navigation = useNavigation();

  const complaints = [
    {
      date: '02-02-2025',
      mobile: '+91 9512400094',
      ticketNumber: '#612',
      status: 'Open'
    },
    {
      date: '09-02-2025',
      mobile: '+91 9512400093',
      ticketNumber: '#510',
      status: 'On Hold'
    },
    {
      date: '04-10-2025',
      mobile: '+91 9512400422',
      ticketNumber: '#450',
      status: 'Closed'
    },
    {
      date: '02-05-2025',
      mobile: '+91 9512400420',
      ticketNumber: '#320',
      status: 'Cancelled'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return '#28a745';
      case 'On Hold':
        return '#ffc107';
      case 'Closed':
        return '#dc3545';
      case 'Cancelled':
        return '#6c757d';
      default:
        return '#333';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, styles.dateColumn]}>DATE</Text>
        <Text style={[styles.headerText, styles.mobileColumn]}>MOBILE{'\n'}NUMBER</Text>
        <Text style={[styles.headerText, styles.ticketColumn]}>TICKET NUMBER</Text>
        <Text style={[styles.headerText, styles.statusColumn]}>STATUS</Text>
      </View>

      {/* Complaints List */}
      <ScrollView style={styles.scrollView}>
        {complaints.map((complaint, index) => (
          <View key={index} style={styles.complaintRow}>
            <Text style={[styles.cellText, styles.dateColumn]}>{complaint.date}</Text>
            <Text style={[styles.cellText, styles.mobileColumn]}>{complaint.mobile}</Text>
            <Text style={[styles.cellText, styles.ticketColumn]}>{complaint.ticketNumber}</Text>
            <Text style={[styles.cellText, styles.statusColumn, { color: getStatusColor(complaint.status) }]}>
              {complaint.status}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* New Complaint Button */}
      <TouchableOpacity 
        style={styles.newComplaintButton}
        onPress={() => {
          navigation.navigate('NewServiceComplaint');
        }}
      >
        <Text style={styles.buttonText}>New Service Complain Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#E0E1E0',
    // borderBottomWidth: 1,
    // borderBottomColor: '#dee2e6',
  },
  headerText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  complaintRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cellText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  // Column widths
  dateColumn: {
    width: '22%',
  },
  mobileColumn: {
    width: '32%',
  },
  ticketColumn: {
    width: '25%',
  },
  statusColumn: {
    width: '21%',
    fontWeight: '500',
  },
  newComplaintButton: {
    backgroundColor: '#000',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    bottom:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ServiceComplaintScreen;