import { useQuery } from "react-query";
import axios from "axios";
import { Text } from "react-native";
import { LiveSlider } from "../styles/Styles";
import LiveCard from "./card/LiveCard";
import { Event } from "../../../../../../types/events";

export default function Live() {

  const { data, isLoading, error } = useQuery("live matches", async () => {
      const result = await axios.get("https://api.sofascore.com/api/v1/sport/football/events/live");
      return result.data
  })

  if(isLoading) return <Text>loading...</Text>
  if(error) return <Text>error occured</Text>

  return (
    <LiveSlider horizontal>
      {
        data?.events?.map(
          (event: Event) => (event.tournament.priority > 250) &&
            <LiveCard event={ event } key={ event.id } />
        )
      }
    </LiveSlider>
  )
}