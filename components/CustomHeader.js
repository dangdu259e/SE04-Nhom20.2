import React from 'react';
import {TouchableOpacity } from 'react-native';
import {Body, Container, Header, Icon, Left, Right, Title} from "native-base";

class CustomHeader extends React.Component{

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity transparent onPress={() => this.props.na}>
                            <Icon name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity transparent>
                            <Icon name='menu' />
                        </TouchableOpacity>
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default CustomHeader
