import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Button, Content, Card, CardItem, Body, Badge, Left, Right, Text, Container,} from 'native-base';

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
      <Container style={row}>
      <Content >
          <Card>
            <CardItem>
              <Image
              style={{width: phWidth, height: phHeight}}
              source={{uri: `https://via.placeholder.com/${phWidth}x${phHeight}`}} />
            </CardItem>
            <CardItem style={noPad}>
              <Left>
                <Text style={h1}>
                  Event Name
                </Text>
              </Left>
              <Right>
                <Badge style={padR} primary>
                  <Text>
                    Tag
                  </Text>
                </Badge>
              </Right>
            </CardItem>
            <CardItem style={noPad}>
              <Body style={{...padL, ...row}}>
                <Text style={padRs}>
                  [ 1 ]
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
                  Event Address
                </Text>
                <Text>
                  Event Hours
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Body style={padL}>
                <Button
                style={selfCenter}
                // onPress={()=>{this.props.navigation.navigate('details',{id:this.props.id})}}
                >
                 <Text>See more details</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
       
        </>
    );
  }
}