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

export default class EventCard extends Component {
  render() {
  
    return (
      <>
      <Content >
          <Card>
            <CardItem>
              <Image
              style={{width: phWidth, height: phHeight}}
              source={{uri: `${this.props.image}`}} />
            </CardItem>
            <CardItem style={noPad}>
              <Left>
                <Text style={h1}>
                  {this.props.name || this.props.event_name}
                </Text>
              </Left>
              <Right>
                <Badge style={padR} primary>
                  <Text>
                    {this.props.price}
                  </Text>
                </Badge>
              </Right>
            </CardItem>
            <CardItem style={noPad}>
              <Body style={{...padL, ...row}}>
                <Text style={padRs}>
                  [  ]
                </Text>
                <Text style={padRs}>
                  [ 2 ]
                </Text>
                <Text>
                  [ 3 ]
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={{...padL}}>
                <Text>
                  {this.props.address}
                </Text>
                <Text>
                  Event Hours
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Body style={padL}>
                <Button
                title="See more details"
                style={selfCenter}
                onPress={()=>{
                  this.props.navigate('Details',{id:this.props.id})}}
                >
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      
       
        </>
    );
  }
}