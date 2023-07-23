import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper"
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
            {
                // uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
                // name: "김민호",
                // introduction: "Minho Kim",
            }
            {props.data.map((item, index) => (
                <View>
                    <Profile
                        key = {index}
                        uri = {item.uri}
                        name = {item.name}
                        introduction = {item.introduction}
                    />
                    <Margin height={13} />
                </View>
            ))}
        </ScrollView>
    )
}