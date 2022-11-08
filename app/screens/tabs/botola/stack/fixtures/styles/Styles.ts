import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../assets/color";
import { MainText } from "../../../../../../assets/text/Text";

export const BotolaFixWrapper = styled(ScrollView)`
    background-color: ${ COLOR.background };   
`

export const StyledText = styled(MainText)`
    text-align: center;
    color: ${ COLOR.main };
`

export const Spacer = styled(View)`
    height: 60px;
`