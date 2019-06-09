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
<<<<<<< HEAD
=======
    console.log(this.props.categories,'      ', typeof(categories))
>>>>>>> master
    return (
      <>
      <Content >
          <Card>
            <CardItem>
              <Image
              style={{width: phWidth, height: phHeight}}
              source={{uri: `${this.props.data.image_url}`}} />
            </CardItem>
            <CardItem style={noPad}>
              <Left>
                <Text style={h1}>
                  {this.props.data.name || this.props.event_name}
                </Text>
              </Left>
              <Right>
                <Badge style={padR} style={{backgroundColor:'black'}}>
                  <Text style={{color:'white'}}>
                    {this.props.data.price}
                  </Text>
                </Badge>
              </Right>
            </CardItem>
            <CardItem style={noPad}>
              <Body style={{...padL, ...row}}>
                <Text style={padRs}>
                  {this.props.data.location.display_address[0]}
                </Text>
                <Text style={padRs}>
                  - {this.props.data.location.display_address[1] }
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={{...padL}}>
                <Text>
                  {this.props.data.location ? this.props.data.location.adress1 : ''}
                </Text>
                <Text>
                  {this.props.data.is_closed === true ? 'Closed':'Open'}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Body style={padL}>
                <Button
                title="See more details"
                color='black'
                onPress={()=>{
                  this.props.navigate('Details',{data:this.props.data})}}
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