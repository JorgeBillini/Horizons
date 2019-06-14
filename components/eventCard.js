import React, { Component } from 'react';
import { Image, Dimensions,Button } from 'react-native';
import { Content, Card, CardItem, Body, Badge, Left, Right, Text, Container,} from 'native-base';
const selfCenter = { alignSelf: 'center' };
const padL = { paddingLeft: 10 };
const padR = { paddingRight: 10 };
const padRs = { paddingRight: 5 };
const h1 = { fontSize: 30 };
const row = { flexDirection: 'row' };
const noPad = { paddingBottom: 0, marginBottom: 0 };

const phWidth = Math.round(Dimensions.get('window').width) - 30;
const phHeight = Math.floor(phWidth/2)

export default EventCard = props => {
  let name;
  if(props.data.name){
    name = props.data.name
  }
  else name= props.data.event_name;
  let display_address1;
  let display_address2;
  if(props.data.location){
    display_address1= props.data.location.display_address[0]
    display_address2= props.data.location.display_address[1]
  }
  else display_address1= "";
  let address = props.data.location ? props.data.location.adress1 : ''
  return (
    <>
    <Content >
        <Card>
          <CardItem>
            <Image
            style={{width: phWidth, height: phHeight}}
            source={{uri: `${props.data.image_url}`}} />
          </CardItem>
          <CardItem style={noPad}>
            <Left>
              <Text style={h1}>
                {name}
              </Text>
            </Left>
            <Right>
              <Badge style={padR} style={{backgroundColor:'black'}}>
                <Text style={{color:'white'}}>
                  {props.data.price}
                </Text>
              </Badge>
            </Right>
          </CardItem>
          <CardItem style={noPad}>
            <Body style={{...padL, ...row}}>
              <Text style={padRs}>
                {display_address1}
              </Text>
              <Text style={padRs}>
                - { display_address2 }
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body style={{...padL}}>
              <Text>
                {address}
              </Text>
              <Text>
                {props.data.is_closed === true ? 'Closed':'Open'}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Body style={padL}>
              <Button
              title="See more details"
              color='black'
              onPress={()=>{
                props.navigate('Details',{data:props.data})}}
              >
                </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    
     
      </>
  );
}
  
  
 
  
