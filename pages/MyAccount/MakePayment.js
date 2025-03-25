import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MakePayment = () => {
  const navigation = useNavigation();
  const [selectedPeriods, setSelectedPeriods] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const paymentPeriods = [
    { id: 1, period: '1-15 Days', amount: 0.00 },
    { id: 2, period: '16-30 Days', amount: 150000 },
    { id: 3, period: '31-45 Days', amount: 1500.00 },
    { id: 4, period: '>45 Days', amount: 150000 },
  ];

  const togglePeriod = (periodId) => {
    if (selectedPeriods.includes(periodId)) {
      setSelectedPeriods(selectedPeriods.filter(id => id !== periodId));
    } else {
      setSelectedPeriods([...selectedPeriods, periodId]);
    }
  };

  useEffect(() => {
    const total = paymentPeriods
      .filter(period => selectedPeriods.includes(period.id))
      .reduce((sum, period) => sum + period.amount, 0);
    setTotalAmount(total);
  }, [selectedPeriods]);

  const formatAmount = (amount) => {
    return `₹ ${amount.toLocaleString('en-IN', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const handlePayment = () => {
    // Handle payment processing here
    console.log('Processing payment for amount:', totalAmount);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Payment Periods */}
        {paymentPeriods.map((period) => (
          <TouchableOpacity
            key={period.id}
            style={styles.periodCard}
            onPress={() => togglePeriod(period.id)}
          >
            <View style={styles.periodInfo}>
              <Text style={styles.periodText}>{period.period}</Text>
              <Text style={styles.amountText}>{formatAmount(period.amount)}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              {selectedPeriods.includes(period.id) && (
                <MaterialIcons name="check" size={24} color="#000" />
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* Total Amount Section */}
        <View style={styles.totalSection}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Payment Amount</Text>
            <Text style={styles.totalAmount}>{formatAmount(totalAmount)}</Text>
          </View>
          <TouchableOpacity 
            style={styles.payButton}
            onPress={handlePayment}
          >
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  periodCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  periodInfo: {
    flex: 1,

  },
  periodText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  amountText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',

  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selectedPeriods => selectedPeriods ? '#fff' : 'transparent',
  },
  totalSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  payButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MakePayment; 