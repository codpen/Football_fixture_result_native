import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLOR } from '../../../../../assets/color'
import { Avatar, BackIcon, Header, HeaderTitle, Heading, HeroSection, Paragraph, PlayerDetailsWrapper, PlayerInfo, Rating, RatingText, Stats, StatsItem, Value } from './styles/Styles'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PlayerDetails() {

  const navigation: any = useNavigation()

  return (
    <PlayerDetailsWrapper>
      <Header>
        <BackIcon onPress={ () => navigation.goBack() }>
          <Ionicons name="chevron-back-circle-sharp" size={ 35 } color={ COLOR.main } />
        </BackIcon>
        <HeaderTitle>Ossmane Dembele</HeaderTitle>
      </Header>
      <HeroSection>
        <Avatar source={{ uri: `https://api.sofascore.app/api/v1/player/100386/image` }}></Avatar>
        <Rating>
          <RatingText>10</RatingText>
        </Rating>
      </HeroSection>
      <PlayerInfo>
        <Paragraph>Marc Andre Ter Shtegen</Paragraph>
        <Paragraph>FC Barcelona</Paragraph>
        <Paragraph>29 Year</Paragraph>
        <Paragraph>MidleFielder</Paragraph>
      </PlayerInfo>
      <Stats>
        <Heading>Statistics</Heading>
        <StatsItem>
          <Paragraph>Total Pass</Paragraph>
          <Value>88</Value>
        </StatsItem>
        <StatsItem>
          <Paragraph>Accurate Pass</Paragraph>
          <Value>88</Value>
        </StatsItem>
        <StatsItem>
          <Paragraph>Total Long Balls</Paragraph>
          <Value>88</Value>
        </StatsItem>        
      </Stats>
    </PlayerDetailsWrapper>
  ) 
}