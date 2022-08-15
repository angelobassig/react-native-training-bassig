import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

// Reusable Styling Variables
const float = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
};
const rightAlign = {alignSelf: 'flex-end'};
const bold = {fontWeight: 'bold'};
const whiteBG = {backgroundColor: '#f0ffff', paddingTop: 15, paddingBottom: 15};
const whiteBG2 = {backgroundColor: '#f0ffff'};
const screenBG = {backgroundColor: '#f0f8ff', flex: 1};
const text = {
  paddingTop: Platform.OS === 'web' ? 0 : 5,
  paddingLeft: Platform.OS === 'web' ? 22 : 20,
  paddingRight: Platform.OS === 'web' ? 25 : 20,
};
const text2 = {
  fontWeight: 'bold',
  paddingLeft: Platform.OS === 'web' ? 22 : 20,
  paddingRight: Platform.OS === 'web' ? 25 : 20,
};
const textKey = {
  color: '#808080',
  fontSize: 14,
  lineHeight: 1,
  paddingTop: 20,
  paddingLeft: 32,
  paddingBottom: 20,
};
const textValue = {
  color: '#808080',
  fontSize: 14,
  lineHeight: 1,
  paddingTop: 20,
  paddingLeft: 10,
  paddingRight: 32,
  paddingBottom: 20,
};
const reimbursementImg = {
  width: 58, // this is the size that properly fits in the white bg
  height: 58, // this is the size that properly fits in the white bg
  borderRadius: 150 / 2,
  overflow: 'hidden',
  borderWidth: 0.1, // subject to change
  borderColor: 'black', // subject to change
};

// Components
const Title = ({title}) => {
  return <Text style={bold}>{title}</Text>;
};

const Reimbursement = props => {
  return (
    <View style={float}>
      <View style={whiteBG}>
        <Image
          source={require('./billdetailsimages/saki1.jpg')}
          style={reimbursementImg}
        />
      </View>
      <View style={whiteBG}>
        <Text style={text2}>{props.company}</Text>
        <Text style={text}>{props.reimbursement}</Text>
        <Text style={text}>{props.datetime}</Text>
      </View>
      <View style={whiteBG}>
        <Text style={text2}>{props.amount}</Text>
        <Text style={[text, rightAlign]}>{props.status}</Text>
        <Text style={text}> </Text>
      </View>
    </View>
  );
};

const ReimbursementDetails = props => {
  return (
    <View style={float}>
      <View style={whiteBG2}>
        <Text></Text>
        <Text style={textKey}>Transaction ID</Text>
        <Text style={textKey}>Total paid amount</Text>
        <Text style={textKey}>Transaction cost</Text>
        <Text style={textKey}>Discount</Text>
        <Text style={textKey}>Invoice ID</Text>
        <Text style={textKey}>Date and time</Text>
        <Text style={textKey}>Payment by</Text>
        <Text style={textKey}>Description</Text>
      </View>
      <View style={whiteBG2}>
        <Text></Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
        <Text style={textKey}>:</Text>
      </View>
      <View style={whiteBG2}>
        <Text></Text>
        <Text style={[textValue, rightAlign]}>{props.transactionID}</Text>
        <Text style={[textValue, rightAlign]}>{props.totalPaidAmount}</Text>
        <Text style={[textValue, rightAlign]}>{props.transactionCost}</Text>
        <Text style={[textValue, rightAlign]}>{props.discount}</Text>
        <Text style={[textValue, rightAlign]}>{props.invoiceID}</Text>
        <Text style={[textValue, rightAlign]}>{props.datetime}</Text>
        <Text style={[textValue, rightAlign]}>{props.paymentBy}</Text>
        <Text style={[textValue, rightAlign]}>{props.description}</Text>
      </View>
    </View>
  );
};

const Screen = () => {
  return (
      <View style={screenBG}>
        <View>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {
              alert('You love Saki Tenma!');
            }} />
            <Appbar.Content style={text} title="Bill Details" />
            <Appbar.Action icon="dots-vertical" />
          </Appbar.Header>
        </View>
        <Text> </Text>
        <Reimbursement
          company="Company Name"
          reimbursement="Internet Bill"
          datetime="10 Jun 2020, 10:50 PM"
          amount="$210.00"
          status="Paid"
        />
        <Text> </Text>
        <ReimbursementDetails
          transactionID="1524200"
          totalPaidAmount="$200.00"
          transactionCost="-$10.00"
          discount="-$5.00"
          invoiceID="8808855"
          datetime="10 Jun, 10:30 PM"
          paymentBy="********601 (image)"
          description="Internet Bill"
        />
      </View>
  );
};

export default Screen;
