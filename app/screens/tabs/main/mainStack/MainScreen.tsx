import Card from '../../../../utils/card/Card';
import Header from '../../../../utils/header/Header';
import LiveCard from './live/LiveCard';
import { BottomSpacer, Heading, LiveSlider, MainScreenWrapper, MatchesWrapper, Section, Spacer } from "./styles/Styles";

export default function MainScreen() {
  return (
    <>
      <Header />
      <MainScreenWrapper>
        <Section>
          <Heading>Live Match</Heading>
          <LiveSlider horizontal>
            <LiveCard />
            <LiveCard />
            <LiveCard />
            <LiveCard />
            <LiveCard />
          </LiveSlider>
        </Section>
        <Section>
          <Heading>Matches</Heading>
          <MatchesWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Spacer />
          </MatchesWrapper>
        </Section>
      </MainScreenWrapper>
      <BottomSpacer />
    </>
  )
}